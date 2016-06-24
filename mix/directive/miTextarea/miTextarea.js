/**
 * mi-textarea 文本区输入框
 * suffix:mi
 *
 * @package angularjs directive
 * @subpackage ui-kit
 *
 * @usage 
 * <mi-textarea maxlength="200" value="data.value" placeholder="please input something..."></mi-textarea>
 * 
 * @author  Yang,junlong at 2015-11-27 11:50:07 build.
 * @version $Id$
 */

var app = require('app/app');

miTextarea.$inject = [];

function miTextarea() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<span class="mi-textarea"><textarea placeholder="{{placeholder}}" ng-model="value" maxlength="{{maxlength}}"></textarea><span ng-if="maxlength" class="max-length">{{curlength||0}}/{{maxlength}}</span></span>',
        scope: {
            placeholder: "@",
            maxlength: '@',
            value: '=',
        },

        link: function($scope, element, attrs) {
            var $input = element.find('textarea');
            $input.on('focus', function(event) {
                element.addClass('mi-textarea-focus');
            }).on('blur', function(event) {
                element.removeClass('mi-textarea-focus');
            });

            if(!$scope.maxlength){
                return;
            }

            $scope.$watch('value', function(newValue, oldValue) {
                var length = newValue ? newValue.length : 0;
                if(length > $scope.maxlength){
                    $scope.value = ($scope.value.substr(0, $scope.maxlength));
                        //return;
                }
                $scope.curlength = length;
            });
        }
    };
}

app.registerDirective('miTextarea', miTextarea);
