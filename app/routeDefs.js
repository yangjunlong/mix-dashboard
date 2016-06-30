/**
 * routeDefs.js
 * SPA 前端路由定义
 * 
 * @author  Yang,junlong at 2016-05-20 14:31:46 build.
 * @version $Id$
 */

var app = require('app.js');

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

        $urlRouterProvider.otherwise('home');

        // a uniform empty tpl for inherit
        var emptyTplInherit = __uri('./empty.html');

        // 首页
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: function(stateParams){
                return __uri('module/home/home.html');
            },
            controller: 'homeCtrl',
            resolve: {
                deps: app.deps('app/module/home/home.js')
            }
        }).state('test', {
            url: '/test',
            templateUrl: function(stateParams){
                return __uri('module/test/test.html');
            }
        });
    }
]);
