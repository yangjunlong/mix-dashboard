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
            link: function ($scope, $element, attrs) {
                var element = $element[0];

                // init options
                var height = attrs['height'] || element.clientHeight || '250px';
                // height = parseInt(height);
                // height = isNaN(height) ? '250px' : height + 'px';

                var width = attrs['width'] || element.clientWidth || '250px';
                width = parseInt(width);
                width = isNaN(width) ? 'auto' : width + 'px';

                var options = {
                    // width in pixels of the visible scroll area
                    width : width,

                    // height in pixels of the visible scroll area
                    height : height,

                    // width in pixels of the scrollbar and rail
                    size : attrs['size'] || '7px',

                    // scrollbar color, accepts any hex/color value
                    color: attrs['color'] || '#000',

                    // scrollbar position - left/right
                    position : attrs['position'] || 'right',

                    // distance in pixels between the side edge and the scrollbar
                    distance : attrs['distance'] || '1px',

                    // default scroll position on load - top / bottom / $('selector')
                    start : attrs['start'] || 'top',

                    // sets scrollbar opacity
                    opacity : attrs['opacity'] || .4,

                    // enables always-on mode for the scrollbar
                    alwaysVisible : $scope.$eval(attrs['alwaysVisible']) || false,

                    // check if we should hide the scrollbar when user is hovering over
                    disableFadeOut : $scope.$eval(attrs['disableFadeOut']) || false,

                    // sets visibility of the rail
                    railVisible : $scope.$eval(attrs['railVisible']) || false,

                    // sets rail color
                    railColor : attrs['railColor'] || '#333',

                    // sets rail opacity
                    railOpacity : attrs['railOpacity'] || .2,

                    // whether  we should use jQuery UI Draggable to enable bar dragging
                    railDraggable : $scope.$eval(attrs['railDraggable']) || true,

                    // defautlt CSS class of the slimscroll rail
                    railClass : attrs['railClass'] || 'slimScrollRail',

                    // defautlt CSS class of the slimscroll bar
                    barClass : attrs['barClass'] || 'slimScrollBar',

                    // defautlt CSS class of the slimscroll wrapper
                    wrapperClass : attrs['wrapperClass'] || 'slimScrollDiv',

                    // check if mousewheel should scroll the window if we reach top/bottom
                    allowPageScroll : $scope.$eval(attrs['allowPageScroll']) || false,

                    // scroll amount applied to each mouse wheel step
                    wheelStep : attrs['wheelStep'] || 20,

                    // scroll amount applied when user is using gestures
                    touchScrollStep : attrs['touchScrollStep'] || 200,

                    // sets border radius
                    borderRadius: attrs['borderRadius'] || '7px',

                    // sets border radius of the rail
                    railBorderRadius : attrs['railBorderRadius'] || '7px'
                };

                // create wrap div
                var wrapper = angular.element('<div></div>').addClass(options.wrapperClass).css({
                    'position': 'relative',
                    'overflow': 'hidden',
                    'width': options.width,
                    'height': options.height
                });

                // reset element style
                $element.css({
                    overflow: 'hidden',
                    width: options.width,
                    height: options.height
                });

                // create scrollbar rail
                var rail = angular.element('<div></div>').addClass(options.railClass).css({
                    width: options.size,
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    display: (options.alwaysVisible && options.railVisible) ? 'block' : 'none',
                    'border-radius': options.railBorderRadius,
                    background: options.railColor,
                    opacity: options.railOpacity,
                    zIndex: 90
                });

                 // create scrollbar
                var bar = angular.element('<div></div>').addClass(options.barClass).css({
                    background: options.color,
                    width: options.size,
                    position: 'absolute',
                    top: 0,
                    opacity: options.opacity,
                    display: options.alwaysVisible ? 'block' : 'none',
                    'border-radius' : options.borderRadius,
                    BorderRadius: options.borderRadius,
                    MozBorderRadius: options.borderRadius,
                    WebkitBorderRadius: options.borderRadius,
                    zIndex: 99
                });

                // set position
                var posCss = (options.position == 'right') ? { right: options.distance } : { left: options.distance };
                rail.css(posCss);
                bar.css(posCss);

                $element.wrap(wrapper);
                // append to parent div
                $element.parent().append(bar);
                $element.parent().append(rail);

                // flag var 
                var isDraging = false;
                var hideTimer = null;
                var minBarHeight = 30;
                var releaseScroll = false;
                var barHeight = 0;
                var isShow = false;

                // make it draggable and no longer dependent on the jqueryUI
                if (options.railDraggable){
                    bar.bind('mousedown', function (event) {
                        var top = parseFloat(bar.css('top'));
                        var pageY = event.pageY;
                        isDraging = true;

                        $document.bind('mousemove', function (event) {
                            bar.css({'top': top + event.pageY - pageY + 'px'});
                            // scroll content
                            scrollContent(0, bar[0].offsetTop, false);
                        });

                        $document.bind('mouseup', function (e) {
                            isDraging = false;
                            $document.unbind('mousemove');
                        });
                    }).bind('selectstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                    });
                }

                // check start position
                if (options.start === 'bottom'){
                    // scroll content to bottom
                    bar.css({ top: element.offsetHeight - bar[0].offsetHeight });
                    scrollContent(0, true);
                } else if (options.start !== 'top') {
                    // assume jQuery selector
                    scrollContent(options.start.offsetTop, null, true);

                    // make sure bar stays hidden
                    if (!options.alwaysVisible) { 
                        bar.hide(); 
                    }
                }

                // attach scroll events
                attachWheel(element);

                // util fn 
                function scrollContent(y, isWheel) {
                    releaseScroll = false;
                    var delta = y;
                    var barOffsetHeight = bar[0].offsetHeight;
                    var maxTop = element.offsetHeight - barOffsetHeight;

                    if(isWheel) {
                        // move bar with mouse wheel
                        delta = parseInt(bar.css('top')) + y * parseInt(options.wheelStep) / 100 * barOffsetHeight;

                        // move bar, make sure it doesn't go out
                        delta = Math.min(Math.max(delta, 0), maxTop);

                        // if scrolling down, make sure a fractional change to the
                        // scroll position isn't rounded away when the scrollbar's CSS is set
                        // this flooring of delta would happened automatically when
                        // bar.css is set below, but we floor here for clarity
                        delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

                        // scroll the scrollbar
                        bar.css({ top: delta + 'px' });
                    }

                    percentScroll = parseInt(bar.css('top'), 10) / (element.offsetHeight - barOffsetHeight);
                    delta = percentScroll * (element.scrollHeight - element.offsetHeight);

                    element.scrollTop = delta;

                    // ensure bar is visible
                    showBar();
                    // trigger hide when scroll is stopped
                    hideBar();
                }

                // attach wheel event
                function attachWheel(target) {
                    if ($window.addEventListener) {
                        target.addEventListener('DOMMouseScroll', _onWheel, false );
                        target.addEventListener('mousewheel', _onWheel, false );
                    } else {
                        $document.attachEvent("onmousewheel", _onWheel)
                    }
                }
                // detach wheel event disabled mouse wheel
                function detachWheel(target) {
                    if ($window.removeEventListener) {
                        target.removeEventListener('DOMMouseScroll', _onWheel, false);
                        target.removeEventListener('mousewheel', _onWheel, false);
                    } else {
                        $document.removeEventListener('onmousewheel', _onWheel);
                    }
                }

                // mouse wheel handler
                function _onWheel(event) {
                    event = event || window.event;
                    var delta = 0;

                    if (event.wheelDelta) {
                        delta = -event.wheelDelta / 120;
                    }

                    if (event.detail) {
                        delta = event.detail / 3;
                    }

                    scrollContent(delta, true);

                    // stop window scroll
                    if (event.preventDefault && !releaseScroll) { 
                        event.preventDefault(); 
                    }
                    if (!releaseScroll) { 
                        event.returnValue = false; 
                    }
                }

                function setBarHeight() {
                    // calculate scrollbar height and make sure it is not too small
                    barHeight = Math.max((element.offsetHeight / element.scrollHeight) * element.offsetHeight, minBarHeight);
                    // hide scrollbar if content is not long enough
                    var display = barHeight == element.offsetHeight ? 'none' : 'block';

                    bar.css({ 
                        height: barHeight + 'px',
                        display: display
                    });
                }

                // show scroller bar
                function showBar () {
                    clearTimeout(hideTimer);
                    if(isShow) {
                        return;
                    }
                    setBarHeight();
                    
                    // show only when required
                    if(barHeight >= element.offsetHeight) {
                        //allow window scroll
                        releaseScroll = true;
                        return;
                    }

                    bar.css({
                        display: 'block'
                    });
                    if (options.railVisible) { 
                        rail.css({
                            display: 'block'
                        }); 
                    }

                    isShow = true;
                }

                // hide scroller bar
                function hideBar () {
                    if (!options.alwaysVisible) {
                        hideTimer = setTimeout(function() {
                            bar.css({
                                display: 'none'
                            });
                            rail.css({
                                display: 'none'
                            });

                            isShow = false;
                        }, 1000);
                    }
                }

                //end link fn
            }
        };
    }]);
});
