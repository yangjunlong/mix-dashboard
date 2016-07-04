/**
 * main file
 * 
 * @author  Yang,junlong at 2016-06-28 10:58:58 build.
 * @version $Id$
 */

var app = require('app.js');
// require app router define
require('routeDefs.js');
// require app http interceptor
require('http-interceptor.js');

app.controller('AppCtrl', ['$scope', '$http', '$state', '$window', function($scope, $http, $state, $window) {
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

    $scope.home = {
      open: true
    }
}]);

module.exports = app;
