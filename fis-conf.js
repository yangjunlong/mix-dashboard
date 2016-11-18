/**
 * MIX fis conf file
 * 
 * @author  Yang,junlong at 2016-06-22 10:12:17 build.
 * @version $Id$
 */

// 基础配置信息 命名空间
fis.config.merge({
    //namespace: 'mix',
    project : {
        // 使用project.exclude排除某些后缀 svn、cvs默认已排除
        exclude : [/\.(tar|rar|psd|jar|bat|sh|md|git|bak)$/i, /^\/mix\/lib\/est/i]
    }
});

fis.config.merge({
	// 插件安装
    modules: {
        parser: {
            less: 'less',
        },
        postprocessor: {
            js: 'jswrapper, require-async'
            //html: 'amd'
        },
        postpackager: 'modjs'
    },
    // 插件配置
    settings : {
        postprocessor : {
            jswrapper: {
                type: 'amd'
            }
        },
        postpackager: {
        	modjs: {
        		subpath: 'pkg/map.js',
                useType: false
        	}
        }
    },

    roadmap : {
        ext : {
            less : 'css'
        },
        path : [
            {
                reg: /LICENSE/i,
                release: false
            },
            {
                reg: 'server.conf',
                release: '/WEB-INF/server.conf'
            },
            {
                reg: /^\/app\/index\.html$/i,
                isMod: true,
                useMap: false,
                release: '/index.html'
            },
            {
                // .html|css 后缀的文件不加入map.json
                reg: /^.*(.+\.(?:html|css))$/i,
                useMap: true,
                url: '/static$&',
                release: '/static$&'
            },
            {
                reg: /^(?!.*mod.js)(.*$)/i,
                isMod: true,
                url: '/static$1',
                release: '/static$1'
            },
            {
                // default
                reg: /^.+$/,
                url: '/static$&',
                release: '/static$&'
            }
        ]
    }
});

fis.emitter.once('fis-conf:loaded', function() {
    if (process.title.split(/\s/)[3] == 'output') {
        fis.config.set('roadmap.path', [
            {
                reg: /LICENSE/i,
                release: false
            },
            {
                reg: 'server.conf',
                release: '/WEB-INF/server.conf'
            },
            {
                reg: /^\/app\/index\.html$/i,
                isMod: true,
                useMap: false,
                release: '/index.html'
            },
            {
                // .html|css 后缀的文件不加入map.json
                reg: /^.*(.+\.(?:html|css))$/i,
                useMap: true,
                url: './static$&',
                release: './static$&'
            },
            {
                reg: /^(?!.*mod.js)(.*$)/i,
                isMod: true,
                url: '/mix-dashboard/static$1',
                release: '/static$1'
            },
            {
                // default
                reg: /^.+$/,
                url: '/mix-dashboard/static$&',
                release: '/static$&'
            }
        ]);
    }
});

// limit jello command
if (fis.require.prefixes[0] != 'fis') {
    //fis.log.error('Please use the `fis` command!\nUsage: jello release -wL');
}

// stdout.write some info...
process.stdout.write('\n β start complie '.yellow +fis.config.get('namespace')+' project ...\n'.yellow);
