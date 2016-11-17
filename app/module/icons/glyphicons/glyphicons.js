/**
 * glyphicons
 * 
 * @author  Yang,junlong at 2016-08-22 12:36:20 build.
 * @version $Id$
 */

var app = require('/app/app.js');

app.registerController('glyphiconsCtrl', ['$scope', function($scope){
	$scope.title = 'Glyphicons';
	$scope.titleIcon = 'fa-fonticons'
}]);