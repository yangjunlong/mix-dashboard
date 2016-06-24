/**
 * mi-datepicker
 * suffix: mi
 * 
 * @package angularjs directive
 * @subpackage ui-kit
 *
 * @usage 
 * <mi-datepicker prefix="开始" time="startTime" format="yyyy-MM-dd"></mi-datepicker>
 * 
 * @author  Yang,junlong at 2016-06-06 13:50:57 build.
 * @version $Id$
 */

var app = require('app/app');

//miDatepicker.$inject = [];

app.registerDirective('miDatepicker', ['$filter', function($filter) {
    return {
        restrict: 'E',
        replace: true,
        template: __inline('miDatepicker.html'),
        scope: {
            prefix: '@',
            format: '@',
            time: '='
        },
        link: function($scope, iElement, iAttrs) {
            var $input = iElement.find('input');
            if(iAttrs.readonly){
                $input.attr('readonly', iAttrs.readonly);
                $input.attr('disabled', true);
                return;
            }

            // 定义默认datepicker格式
            $scope.datepickerFormat = $scope.format || 'yyyy-MM-dd';

            if (typeof $scope.time === 'string') {
                // 兼容IE8的日期格式转换
                $scope.time = new Date($scope.time.replace(/-/g, '/'));
            } else {
                $scope.time = $scope.time;
            }

            // 按钮点击打开选择panel
            $scope.datepicker = function($event) {
                $scope.opened = true;
                $event.stopPropagation();
            }

            // 日期格式化
            $scope.$watch('time', function() {
                $scope.time = $filter('date')($scope.time, $scope.datepickerFormat);
            });
        }
    };
}]);
