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

app.controller('AppCtrl', ['$scope', '$http', '$state', '$q', function($scope, $http, $state, $q) {
	console.log($state);

    $scope.title = '这是标题';

    $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };

}]);

module.exports = app;
