define('app/routeDefs.js', function(require, exports, module){ /**
 * routeDefs.js
 * SPA 前端路由定义
 * 
 * @author  Yang,junlong at 2016-05-20 14:31:46 build.
 * @version $Id$
 */

var app = require('app/app.js');

// register `routeDefs` Provider
app.provider('routeDefs', [
    '$stateProvider',
    '$urlRouterProvider',
    '$couchPotatoProvider',
    function($stateProvider, $urlRouterProvider, $couchPotatoProvider) {
        this.$get = function() {
            // this is a config-time-only provider
            // in a future sample it will expose runtime information to the app
            return {};
        };
        //$locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('home/index');

        // a uniform empty tpl for inherit
        var emptyTplInherit = './static/app/empty.html';

        // 首页
        $stateProvider.state('home', {
            url: '/home',
            abstract: true,
            templateUrl: emptyTplInherit
        })
        .state('home.index', {
            url: '/index',
            templateUrl: function(stateParams){
                return './static/app/module/home/home.html';
            },
            controller: 'homeCtrl',
            resolve: {
                deps: app.deps('app/module/home/home.js')
            }
        })
        .state('home.order', {
            url: '/order?startDate&endDate&bizType&bizId',
            templateUrl: function(stateParams){
                return './static/app/module/order/order.html';
            },
            controller: 'orderCtrl',
            resolve: {
                deps: app.deps('app/module/order/order.js')
            }
        })
        .state('table', {
            url: '/table',
            abstract: true,
            templateUrl: emptyTplInherit
        })
        .state('table.simple', {
            url: '/simple',
            templateUrl: function(stateParams){
                return './static/app/module/table/simple/simple.html';
            },
            controller: 'simpleTableCtrl',
            resolve: {
                deps: app.deps('app/module/table/simple/simple.js')
            }
        })
        .state('table.dynamic', {
            url: '/dynamic',
            templateUrl: function(stateParams){
                return './static/app/module/table/dynamic/dynamic.html';
            },
            controller: 'dynamicTableCtrl',
            resolve: {
                deps: app.deps('app/module/table/dynamic/dynamic.js')
            }
        })
        .state('icons', {
            url: '/icons',
            abstract: true,
            templateUrl: emptyTplInherit
        })
        .state('icons.fontawesome', {
            url: '/fontawesome',
            templateUrl: function(stateParams){
                return './static/app/module/icons/fontawesome/fontawesome.html';
            },
            controller: 'fontAwesomeCtrl',
            resolve: {
                deps: app.deps('app/module/icons/fontawesome/fontawesome.js')
            }
        })
        .state('icons.glyphicons', {
            url: '/glyphicons',
            templateUrl: function(stateParams){
                return './static/app/module/icons/glyphicons/glyphicons.html';
            },
            controller: 'glyphiconsCtrl',
            resolve: {
                deps: app.deps('app/module/icons/glyphicons/glyphicons.js')
            }
        })
        .state('icon', {
            url: '/icon/{icon:[a-zA-Z-0-9]+}',
            templateUrl: function(stateParams){
                return './static/app/module/icons/icon.html';
            },
            controller: 'fontIconCtrl',
            resolve: {
                deps: app.deps('app/module/icons/icon.js')
            }
        })
        .state('form', {
            url: '/form',
            abstract: true,
            templateUrl: emptyTplInherit
        })
        .state('form.basic', {
            url: '/basic',
            templateUrl: function(stateParams){
                return 'module/form/basic/basic.html';
            },
            controller: 'basicFormCtrl',
            resolve: {
                deps: app.deps('app/module/form/basic/basic.js')
            }
        })
        ;
    }
]);
 
});