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

app.controller('AppCtrl', ['$scope', '$http', '$modal', '$q', function($scope, $http, $modal, $q) {

    $scope.title = '这是标题';
}]);

module.exports = app;
