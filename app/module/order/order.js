/**
 * 首页模块
 * 
 * @author  Yang,junlong at 2016-06-28 10:43:26 build.
 * @version $Id$
 */
var app = require('/app/app.js');
require('mix/directive/miDatepicker/miDatepicker');
require('mix/directive/miSelect/miSelect');

app.registerController('orderCtrl', ['$scope', '$http', '$state', '$stateParams', 'dateFilter',  function($scope, $http, $state, $stateParams, dateFilter){
	$scope.title = '订单示例';
	$scope.titleIcon = 'fa-list-alt';

	// init params
    $scope.queryParams = {
        startDate: dateFilter($scope.startTime, 'yyyy-MM-dd'),
        endDate: dateFilter($scope.endTime, 'yyyy-MM-dd')
    };
    angular.forEach($stateParams, function(value, index) {
        if(value) {
            $scope.queryParams[index] = value;
        }
    });

    $http.get('api/v1/order/options.json')
    .success(function(data, status, headers, config) {
        var data = data.data;
        var bizTypes = data.bizTypes
        
        $scope.bizTypesOptions = bizTypes;
    });

    $http.get('/api/v1/table/dynamic.json', {
    	params: $scope.queryParams
    })
    .success(function(data, status, headers, config) {
    	// 给模板中的tableData赋值
        $scope.tableData = data.data;

        $scope.dataJson = jsonStringify(data, 4);
    });

    $scope.search = function () {
    	$state.go('home.order', $scope.queryParams, {
            reload: true
        });
    }

}]);
