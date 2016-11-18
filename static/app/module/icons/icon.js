define('app/module/icons/icon.js', function(require, exports, module){ /**
 * 字体图标详情
 * prefix
 * @author  Yang,junlong at 2016-08-22 13:51:23 build.
 * @version $Id$
 */

var app = require('app/app.js');

app.registerController('fontIconCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
	$scope.title = '字体图标';
	$scope.titleIcon = 'fa-fonticons';
	$scope.prefix = 'fa';

	var icon = $stateParams.icon;
	if(icon.indexOf('glyphicon') > -1) {
		$scope.prefix = 'glyphicon';
	} else {
		icon = 'fa-' + $stateParams.icon;
	}

	$scope.icon = icon;
}]); 
});