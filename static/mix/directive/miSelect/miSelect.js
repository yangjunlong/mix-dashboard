define('mix/directive/miSelect/miSelect.js', function(require, exports, module){ /**
 * ui-select 下拉菜单
 *
 * @package angularjs directive
 * @subpackage ui-kit
 *
 * @usage 
 * <mi-select options="['北京','深圳']"  selected="city" value="value"></mi-select>
 * 
 * @author  Yang,junlong at 2015-11-25 15:00:55 build.
 * @version $Id: uiSelect.js 12500 2016-01-21 10:04:18Z yangjunlong $
 */

var app = require('app/app');

app.registerDirective('miSelect',  [function(){
    return {
        restrict: 'E',
        replace: true,
            template: "<div class=\"btn-group mi-select\">\n    <button type=\"button\" class=\"btn {{theme || 'btn-default'}} dropdown-toggle\" data-toggle=\"dropdown\" ng-disabled=\"disabled\">\n        <span class=\"text\" style=\"width:{{innerwidth}};\">{{displayName}}</span>\n        <span class=\"ui-icon\"><span class=\"caret\"></span></span>\n        \n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n        <li ng-repeat=\"option in options\"><a ng-click=\"selcet(option)\">{{option.name || option}}</a></li>\n    </ul>\n</div>",
            scope: {
            theme: '@',
            options: '=',
            selected: '=',
            value: '=',
            disabled: '=',
            innerwidth:'@',
            onchange: '&'
        },
        link: function($scope, iElement, iAttrs) {

            // 监听options变量，为那些ajax加载的下拉菜单做补救
            $scope.$watch('options', function() {
                // 如果供显示的选中项依然为空,则遍历查找选中项
                setDisplayName($scope, iElement);
            });

            // // 初始化显示值
            setDisplayName($scope, iElement);

            /**
             * 下拉菜单选择事件
             * @param  {object} option 选项原型，为options数组的一个元素
             */
            $scope.selcet = function(option) {
                var _displayName = option.name || option;
                // 人工重复点击检查
                if (_displayName === $scope.displayName) {
                    return false;
                }

                if(option.value == 0){
                    iElement.removeClass('ui-selected');
                }else{
                    iElement.addClass('ui-selected');
                    iElement.removeClass('ui-error');
                }
                    
                setSelected($scope, iAttrs, option);

                $scope.onchange({args: option});
            };
        }
    };

    /**
     * 设置显示值
     * @param {object} $scope 实例独立scope
     */
    function setDisplayName($scope, iElement) {
        if ($scope.selected) {
            $scope.displayName = $scope.selected.name || $scope.selected;
            iElement.addClass('ui-selected');
        } else if ($scope.options){
            if ($scope.value){
                for (var i = 0; i < $scope.options.length; i++) {
                    if ($scope.options[i].value == $scope.value) {
                        $scope.displayName = $scope.options[i].name;
                        iElement.addClass('ui-selected');
                    }
                }
            } else {
                $scope.displayName = $scope.options[0].name || $scope.options[0];
            }
        }
    }

    /**
     * 当下拉选择时候调用
     * @param {object} $scope 实例独立scope
     * @param {object} iAttrs 实例属性
     * @param {object} option 选项option
     */
    function setSelected($scope, iAttrs, option) {
        // 设置显示值
        $scope.displayName = option.name || option;

        // 设置选项的原始值
        if (iAttrs.selected) {
            $scope.selected = option;
        }

        // 设置选项的常用value值
        if (iAttrs.value) {
            $scope.value = option.value || undefined;
        }
    }
}]);
 
});