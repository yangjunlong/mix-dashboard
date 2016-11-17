/**
 * @file: mod.js
 * @author fis
 * ver: 1.0.13
 * update: 2016/01/27
 * https://github.com/fex-team/mod
 */
var require;

/* eslint-disable no-unused-vars */
var define;

(function (global) {

    // 避免重复加载而导致已定义模块丢失
    if (require) {
        return;
    }

    var head = document.getElementsByTagName('head')[0];
    var loadingMap = {};
    var factoryMap = {};
    var modulesMap = {};
    var scriptsMap = {};
    var resMap = {};
    var pkgMap = {};

    var createScripts = function(queues, onerror){

        var docFrag = document.createDocumentFragment();

        for(var i = 0, len = queues.length; i < len; i++){
            var id = queues[i].id;
            var url = queues[i].url;

            if (url in scriptsMap) {
                continue;
            }

            scriptsMap[url] = true;

            var script = document.createElement('script');
            if (onerror) {
                (function(script, id){
                    var tid = setTimeout(function(){
                        onerror(id);
                    }, require.timeout);

                    script.onerror = function () {
                        clearTimeout(tid);
                        onerror(id);
                    };

                    var onload = function () {
                        clearTimeout(tid);
                    };

                    if ('onload' in script) {
                        script.onload = onload;
                    }
                    else {
                        script.onreadystatechange = function () {
                            if (this.readyState === 'loaded' || this.readyState === 'complete') {
                                onload();
                            }
                        };
                    }
                })(script, id);
            }
            script.type = 'text/javascript';
            script.src = url;

            docFrag.appendChild(script);
        }

        head.appendChild(docFrag);
    };

    var loadScripts = function(ids, callback, onerror){
        var queues = [];
        for(var i = 0, len = ids.length; i < len; i++){
            var id = ids[i];
            var queue = loadingMap[id] || (loadingMap[id] = []);
            queue.push(callback);

            //
            // resource map query
            //
            var res = resMap[id] || resMap[id + '.js'] || {};
            var pkg = res.pkg;
            var url;

            if (pkg) {
                url = pkgMap[pkg].url || pkgMap[pkg].uri;
            }
            else {
                url = res.url || res.uri || id;
            }

            queues.push({
                id: id,
                url: url
            });
        }

        createScripts(queues, onerror);
    };

    define = function (id, factory) {
        id = id.replace(/\.js$/i, '');
        factoryMap[id] = factory;

        var queue = loadingMap[id];
        if (queue) {
            for (var i = 0, n = queue.length; i < n; i++) {
                queue[i]();
            }
            delete loadingMap[id];
        }
    };

    require = function (id) {

        // compatible with require([dep, dep2...]) syntax.
        if (id && id.splice) {
            return require.async.apply(this, arguments);
        }

        id = require.alias(id);

        var mod = modulesMap[id];
        if (mod) {
            return mod.exports;
        }

        //
        // init module
        //
        var factory = factoryMap[id];
        if (!factory) {
            throw '[ModJS] Cannot find module `' + id + '`';
        }

        mod = modulesMap[id] = {
            exports: {}
        };

        //
        // factory: function OR value
        //
        var ret = (typeof factory === 'function') ? factory.apply(mod, [require, mod.exports, mod]) : factory;

        if (ret) {
            mod.exports = ret;
        }

        return mod.exports;
    };

    // 分析依赖
    require.async = function (names, onload, onerror) {
        if (typeof names === 'string') {
            names = [names];
        }

        var depsMap = {};
        var depsRes = [];
        var temNum = 0;

        // 查找依赖
        function findDeps(deps) {
            var child;
            var restmp = [];
            for (var i = 0, n = deps.length; i < n; i++) {
                //
                // skip loading or loaded
                //
                var dep = require.alias(deps[i]);

                if (dep in depsMap) {
                    continue;
                }

                depsMap[dep] = true;

                if (dep in factoryMap) {
                    // check whether loaded resource's deps is loaded or not
                    child = resMap[dep] || resMap[dep + '.js'];
                    if (child && 'deps' in child) {
                        findDeps(child.deps);
                    }
                    continue;
                }

                restmp.push(dep);
                temNum++ ;

                child = resMap[dep] || resMap[dep + '.js'];
                if (child && 'deps' in child) {
                    findDeps(child.deps);
                }
            }
            depsRes = depsRes.concat(restmp);
        }

        function updateNeed() {
            if (0 === needNum--) {
                var args = [];
                for (var i = 0, n = names.length; i < n; i++) {
                    args[i] = require(names[i]);
                }

                onload && onload.apply(global, args);
            }
        }

        // 加载依赖资源
        function loadDepsRes(depsRes, callback) {
            var queues = {};
            for(var i = 0, l = depsRes.length; i < l; i++) {
                var dep = depsRes[i];

                var res = resMap[dep] || resMap[dep + '.js'] || {};
                var pkg = res.pkg;
                var url;

                if (pkg) {
                    url = pkgMap[pkg].url || pkgMap[pkg].uri;
                } else {
                    url = res.url || res.uri || dep;
                }

                var type = res['type'];

                if(!type) {
                    var index = url.lastIndexOf('.');
                    type = url.substr(index + 1);
                    type = type.toLowerCase();
                }
                queues[type] || (queues[type] = []);

                queues[type].push({
                    dep: dep,
                    url: url
                });
            }
            loadRes(queues, callback);
        }

        function loadRes (res, callback) {
            var docFrag = document.createDocumentFragment();

            for( var type in res ) {
                var deps = res[type];
                var size = deps.length;

                switch(type){
                case 'js':
                    for(var i = 0, l = deps.length; i < l; i++) {
                        var dep = deps[i].dep;
                        var url = deps[i].url;

                        // with js
                        var queue = loadingMap[dep] || (loadingMap[dep] = []);
                        queue.push((function(size){
                            return function(){
                                callback(size)
                            }
                        })(size));

                        if (url in scriptsMap) {
                            continue;
                        }

                        scriptsMap[url] = true;
                        var script = require.js({
                            url: url,
                            onload: function(){
                                //callback(size)
                            }
                        });
                        docFrag.appendChild(script);
                    }
                    break;
                case 'css':
                    for(var i = 0, l = deps.length; i < l; i++) {
                        var dep = deps[i].dep;
                        var url = deps[i].url;
                        if (url in scriptsMap) {
                            continue;
                        }
                        scriptsMap[url] = true;
                        var link = require.css({
                            url: url,
                            onload: (function(dep){
                                return function(){
                                    //callback(size)
                                    factoryMap[dep] = true;
                                    //console.log(deps);
                                }
                            })(dep)
                        });
                        docFrag.appendChild(link);
                    }
                    break;
                default:
                }
            }

            head.appendChild(docFrag);
        }

        findDeps(names);
        //console.log(depsRes);
        // 
        var despNum = 0;
        var callback = function (size) {
            if(++despNum == size) {
                var args = [];
                for (var i = 0, n = names.length; i < n; i++) {
                    args[i] = require(names[i]);
                }
                onload && onload.apply(global, args);
            }
        }
        loadDepsRes(depsRes, callback);

        if (temNum == 0) {
            // TODO 
            callback(1);
        }
        //loadScripts(needLoad, updateNeed, onerror);
        //updateNeed();
    };
    
    require.ensure = function(names, callback) {
      require.async(names, function() {
        callback && callback.call(this, require);
      });
    };

    require.resourceMap = function (obj) {
        var k;
        var col;

        // merge `res` & `pkg` fields
        col = obj.res;
        for (k in col) {
            if (col.hasOwnProperty(k)) {
                resMap[k] = col[k];
            }
        }

        col = obj.pkg;
        for (k in col) {
            if (col.hasOwnProperty(k)) {
                pkgMap[k] = col[k];
            }
        }
    };

    require.loadJs = function (url) {
        if (url in scriptsMap) {
            return;
        }

        scriptsMap[url] = true;

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        head.appendChild(script);
    };

    require.loadCss = function (cfg) {
        if (cfg.content) {
            var sty = document.createElement('style');
            sty.type = 'text/css';

            if (sty.styleSheet) { // IE
                sty.styleSheet.cssText = cfg.content;
            }
            else {
                sty.innerHTML = cfg.content;
            }
            head.appendChild(sty);
        }
        else if (cfg.url) {
            var link = document.createElement('link');
            link.href = cfg.url;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
        }
    };


    require.alias = function (id) {
        return id.replace(/\.js$/i, '');
    };

    require.timeout = 5000;



    // util
    
    require.js = function(options) {
        // var options = {
        //     url: '',
        //     id: '',
        //     onload: function(){},
        //     onerror: function(){},
        //     noecho: false
        // };

        var script = document.createElement('script');

        var _onload = function () {
            clearTimeout(tid);
            options.onload && options.onload();
        };

        var _onerror = function () {
            clearTimeout(tid);
            options.onerror && options.onerror();
        };

        var tid = setTimeout(_onerror, require.timeout);
        script.onerror = _onerror;

        if ('onload' in script) {
            script.onload = _onload;
        } else {
            script.onreadystatechange = function () {
                if (this.readyState === 'loaded' || this.readyState === 'complete') {
                    _onload();
                }
            };
        }

        script.type = 'text/javascript';
        script.src = options.url;
        // script.id = id;
        
        if(!options.noecho) {
            head.appendChild(script);
        }
        return script;
    }

    require.css = function (options) {
        var link = document.createElement('link');

        var _onload = function () {
            clearTimeout(tid);
            options.onload && options.onload();
        };

        var _onerror = function () {
            clearTimeout(tid);
            options.onerror && options.onerror();
        };

        var tid = setTimeout(_onerror, require.timeout);

        link.onerror = _onerror;

        if ('onload' in link) {
            link.onload = _onload;
        } else {
            script.onreadystatechange = function () {
                if (this.readyState === 'loaded' || this.readyState === 'complete') {
                    _onload();
                }
            };
        }

        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = options.url;
        // script.id = id;
        
        if(!options.noecho) {
            head.appendChild(link);
        }
        return link;
    }
})(this);
