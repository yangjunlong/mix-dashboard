/**
 * 动态表格 控制器
 * 
 * @author  Yang,junlong at 2016-08-22 20:31:16 build.
 * @version $Id$
 */

var app = require('/app/app.js');
require('mix/directive/miSyntaxHighlighter/miSyntaxHighlighter');

// 格式化json
function jsonStringify(data, space){
    var seen=[];
    return JSON.stringify(data,function(key,val){
        if(!val||typeof val !=='object'){
            return val;
        }
        if(seen.indexOf(val)!==-1){
            return '[Circular]';
        }
        seen.push(val);
        return val;
    },space);
}

app.registerController('dynamicTableCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce){
    $scope.title = '动态表格';
    $scope.titleIcon = 'fa-table'
    
    // 动态表格接口
    $http.get('/api/v1/table/dynamic.json', {})
    .success(function(data, status, headers, config) {
    	// 给模板中的tableData赋值
        $scope.tableData = data.data;

        $scope.dataJson = jsonStringify(data, 4);
    });


    $scope.tableSource = $sce.trustAsHtml(__inline('_dynamic_example.html'));

    $scope.tableCtrlSource = $sce.trustAsHtml(__inline('_dynamic_controller.html'));
}]);
