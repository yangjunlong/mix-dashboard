/**
 * Font Awesome
 * 
 * @author  Yang,junlong at 2016-08-22 12:36:20 build.
 * @version $Id$
 */

var app = require('/app/app.js');

app.registerController('fontAwesomeCtrl', ['$scope', function($scope){
	$scope.title = 'Font Awesome';
	$scope.titleIcon = 'fa-fonticons'
}]);