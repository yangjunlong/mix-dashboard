define('app/main.js', function(require, exports, module){ /**
 * main file
 * 
 * @author  Yang,junlong at 2016-06-28 10:58:58 build.
 * @version $Id$
 */

var app = require('app/app.js');
var mix = require('mix/mix.js');
// require app router define
require('app/routeDefs.js');
// require app http interceptor
require('app/http-interceptor.js');

app.controller('AppCtrl', ['$scope', '$http', '$state', '$window', '$modal', function($scope, $http, $state, $window, $modal) {
    var timer = null;
    var $content = angular.element(document.getElementById('content'));
    $window.onresize = function () {
        clearTimeout(timer);
        timer = setTimeout(function(){
            $content.css({
              'minHeight': document.documentElement.clientHeight + 'px'
            });
        }, 200);
    };
    $window.onresize();

    // 关于
    $scope.about = function ($event) {
        $event.preventDefault();

        $modal.open({
            templateUrl: './static/app/module/about/about.html',
            animation: false,
            controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
                $scope.title = '关于';
                $scope.project = '统一收银台后台系统';
            }]
        });
    }
}]);


// 定义一个全局的返回顶部指令
app.directive("miBackTop", function () {
    var html = ['<div class="mi-backTop" style="display:none">',
       '<a href="javascript:;">',
       '<div class="arrow"></div>',
       '<div class="stick"></div>',
       '</a>',
       '</div>'].join('');

    return {
        restrict: "E",
        replace: true,
        template: html,
        link: function ($scope, $element, attrs) {
            angular.element(window).on('scroll', function () {
                if (document.body.scrollTop > document.documentElement.clientHeight) {
                    $element.css('display', 'block');
                } else  {
                    $element.css('display', 'none');
                }
            });

            /*点击回到顶部*/  
            $element.on('click', function () {
                document.body.scrollTop = 0; 
            });
        }
    };
});

module.exports = app;
 
});