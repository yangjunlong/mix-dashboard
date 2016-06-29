/**
 * ng-slimscroll directive
 * AngularJS implementation of original jQuery slimScroll
 * @see https://github.com/rochal/jQuery-slimScroll
 * @attribute base on jQuery-slimScroll version: 1.3.8
 * 
 * @author  Yang,junlong at 2016-06-29 11:20:43 build.
 * @version $Id$
 */

(function(global, factory) {
    'use strict';
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = factory( global );
    } else {
        factory( global );
    }
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window) {
    angular.module('ui.slimscroll', []).
    /**
     * define ngSlimscroll directive
     * 
     */
    directive('ngSlimscroll', ['$document', '$window', '$compile', function ($document, $window, $compile) {
        return {
            restrict: 'A',
            // template: '',
            scope: true,
            link: function ($scope, element, attrs) {
                

            }
        };
    }]);
});
