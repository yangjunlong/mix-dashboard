define('app/module/table/simple/simple.js', function(require, exports, module){ /**
 * 简单表格 控制器 Controller
 * 
 * @author  Yang,junlong at 2016-08-22 19:56:41 build.
 * @version $Id$
 */

var app = require('app/app.js');
require('mix/directive/miSyntaxHighlighter/miSyntaxHighlighter');

app.registerController('simpleTableCtrl', ['$scope', '$sce', function($scope, $sce){
	$scope.title = '简单表格';
	$scope.titleIcon = 'fa-table'

	$scope.table = $sce.trustAsHtml("<!--\n * 简单表格示例代码\n * \n * @author  Yang,junlong at 2016-08-22 16:23:39 build.\n * @version $Id$\n -->\n\n<table class=\"table table-hover table-striped\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>订单ID</th>\n\t\t\t<th>公司名称</th>\n\t\t\t<td>公司地址</td>\n\t\t\t<th>公司法人</th>\n\t\t\t<th>创建日期</th>\n\t\t\t<td>状态</td>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr class=\"active\">\n\t\t\t<td>23239293823</td>\n\t\t\t<td>小米科技有限公司</td>\n\t\t\t<td>北京市海淀区朱房路 66 号顺事嘉业创业园 F座</td>\n\t\t\t<td>雷军</td>\n\t\t\t<td>2016-8-22</td>\n\t\t\t<td>未上市</td>\n        </tr>\n        <tr class=\"success\">\n\t\t\t<td>40348348934</td>\n\t\t\t<td>百度在线网络技术(北京)有限公司</td>\n\t\t\t<td>北京市海淀区上地十街10号</td>\n\t\t\t<td>李彦宏</td>\n\t\t\t<td>2000-1-2</td>\n\t\t\t<td>未上市</td>\n        </tr>\n        <tr class=\"warning\">\n\t\t\t<td>023939849230320</td>\n\t\t\t<td>阿里巴巴集团</td>\n\t\t\t<td>杭州西湖</td>\n\t\t\t<td>马云</td>\n\t\t\t<td>1999-8-22</td>\n\t\t\t<td>未上市</td>\n        </tr>\n        <tr class=\"danger\">\n\t\t\t<td>123138239233</td>\n\t\t\t<td>360安全卫士</td>\n\t\t\t<td>酒仙桥</td>\n\t\t\t<td>周鸿祎</td>\n\t\t\t<td>2005-3-21</td>\n\t\t\t<td>未上市</td>\n        </tr>\n        <tr class=\"info\">\n\t\t\t<td>023939849230320</td>\n\t\t\t<td>阿里巴巴集团</td>\n\t\t\t<td>杭州西湖</td>\n\t\t\t<td>马云</td>\n\t\t\t<td>1999-8-22</td>\n\t\t\t<td>未上市</td>\n        </tr>\n\t</tbody>\n</table>");

	$scope.view = $sce.trustAsHtml("<!--\n * 简单表格 ui-view\n * \n * @author  Yang,junlong at 2016-08-22 19:53:29 build.\n * @version $Id$\n -->\n\n<div class=\"row\">\n\t<div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\">\n\t\t<h1 class=\"page-title\"><i class=\"fa-fw fa {{titleIcon}}\"></i> {{title}} </h1>\n\t</div>\n</div>\n\n<div class=\"alert alert-success\">\n    简单表格式示例，只是由静态的html渲染而成，并不涉及后端数据的交互。\n</div>\n\n<h2>预览效果</h2>\n<span ng-bind-html=\"table\"></span>\n\n<h2>表格源码</h2>\n<mi-syntaxhighlighter lang=\"Html\" content=\"{{table}}\" theme=\"RDark\"></mi-syntaxhighlighter>\n<p class=\"notes\">\n<small class=\"text-muted\">你可以复制上面的表格源代码，然后粘贴到你需要在网页中的位置。</small>\n</p>\n\n<h2>Bootstrap样式说明</h2>\n<a href=\"http://v3.bootcss.com/css/#tables\" target=\"_blank\">点击此处查看表格样式详情</a>\n\n<hr />\n\n<h2>简单表格 ui-view 路由定义(routeDefs)</h2>\n<mi-syntaxhighlighter lang=\"js\" content=\"{{routeDefs}}\" theme=\"RDark\"></mi-syntaxhighlighter>\n<h2>简单表格 ui-view 模板</h2>\n<mi-syntaxhighlighter lang=\"html\" content=\"{{view}}\" theme=\"RDark\"></mi-syntaxhighlighter>\n<h2>简单表格 ui-view 控制器</h2>\n<mi-syntaxhighlighter lang=\"js\" content=\"{{controller}}\" theme=\"RDark\"></mi-syntaxhighlighter>");

	$scope.routeDefs = $sce.trustAsHtml("/**\n * 简单表格路由信息，具体需要到app/routeDefs.js文件查看\n * \n * @author  Yang,junlong at 2016-08-22 20:00:04 build.\n * @version $Id$\n */\t\n\n.state('table', {\n    url: '/table',\n    abstract: true,\n    templateUrl: emptyTplInherit\n})\n.state('table.simple', {\n    url: '/simple',\n    templateUrl: function(stateParams){\n        return __uri('module/table/simple/simple.html');\n    },\n    controller: 'simpleTableCtrl',\n    resolve: {\n        deps: app.deps('app/module/table/simple/simple.js')\n    }\n});");

	$scope.controller = $sce.trustAsHtml("/**\n * 简单表格 控制器 Controller\n * \n * @author  Yang,junlong at 2016-08-22 19:56:41 build.\n * @version $Id$\n */\n\nvar app = require('/app/app.js');\nrequire('mix/directive/miSyntaxHighlighter/miSyntaxHighlighter');\n\napp.registerController('simpleTableCtrl', ['$scope', '$sce', function($scope, $sce){\n\t$scope.title = '简单表格';\n\t$scope.titleIcon = 'fa-table'\n\n\t$scope.table = $sce.trustAsHtml(__inline('_simple_example.html'));\n\n\t$scope.view = $sce.trustAsHtml(__inline('simple.html'));\n\n\t$scope.routeDefs = $sce.trustAsHtml(__inline('_simple_routeDefs.html'));\n\n\t$scope.controller = $sce.trustAsHtml(__inline('_simple_contoller.html'));\n}]);\n");
}]);
 
});