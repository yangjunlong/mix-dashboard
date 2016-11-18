define('app/module/table/dynamic/dynamic.js', function(require, exports, module){ /**
 * 动态表格 控制器
 * 
 * @author  Yang,junlong at 2016-08-22 20:31:16 build.
 * @version $Id$
 */

var app = require('app/app.js');
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


    $scope.tableSource = $sce.trustAsHtml("<!--\n * 动态表格示例模板文件\n * \n * @author  Yang,junlong at 2016-08-23 10:40:19 build.\n * @version $Id$\n -->\n<div class=\"table-wrap\">\n\t<table class=\"table table-hover table-striped\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>订单ID</th>\n\t\t\t\t<th>商品名称</th>\n\t\t\t\t<th>商品价格</th>\n\t\t\t\t<th>商家名称</th>\n\t\t\t\t<th>创建时间</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr ng-repeat=\"order in tableData\">\n\t\t\t\t<td>{{order.id}}</td>\n\t\t\t\t<td>{{order.name}}</td>\n\t\t\t\t<td>{{order.price}}</td>\n\t\t\t\t<td>{{order.seller}}</td>\n\t\t\t\t<td>{{order.createTime}}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n");

    $scope.tableCtrlSource = $sce.trustAsHtml("/**\n * 动态表格示例控制器脚本文件\n * \n * @author  Yang,junlong at 2016-08-23 11:18:45 build.\n * @version $Id$\n */\n\nvar app = require('/app/app.js');\n// 加载语法高亮指令\nrequire('mix/directive/miSyntaxHighlighter/miSyntaxHighlighter');\n\napp.registerController('dynamicTableCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce){\n    $scope.title = '动态表格';\n    $scope.titleIcon = 'fa-table'\n    \n    // 动态表格接口\n    $http.get('/api/v1/table/dynamic.json', {})\n    .success(function(data, status, headers, config) {\n    \t// 给模板中的tableData赋值\n        $scope.tableData = data.data\n    });\n\t\n\t// 忽略此处代码\n    $scope.tableSource = $sce.trustAsHtml(__inline('_dynamic_example.html'));\n    $scope.tableCtrlSource = $sce.trustAsHtml(__inline('_dynamic_controller.html'));\n}]);");
}]);
 
});