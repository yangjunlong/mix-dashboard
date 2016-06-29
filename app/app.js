/**
 * app init
 * 
 * @author  Yang,junlong at 2016-06-23 15:29:09 build.
 * @version $Id$
 */

require('/mix/lib/angular/angular.js');
require('/mix/lib/angular-ui-router/angular-ui-router.js');
require('/mix/lib/angular-couch-potato/angular-couch-potato.js');

require('/mix/lib/angular-cookies/angular-cookies.js');
require('/mix/lib/angular-resource/angular-resource.js');

require('/mix/lib/angular-ui-bootstrap/ui-bootstrap-tpls.js');
require('/mix/lib/angular-loading-bar/loading-bar.js');
require('/mix/lib/angular-file-upload/angular-file-upload.js');

// load jquery-slimscroll.js
require('/mix/directive/ngSlimscroll/ngSlimscroll.js');

//定义angular模块
var app = angular.module('app', [
    'ui.router',
    'scs.couch-potato', 
    'ngCookies',
    'ngResource',
    'ui.bootstrap', 
    'ui.bootstrap.tpls',
    'chieffancypants.loadingBar',
    'angularFileUpload',
    'ui.slimscroll'
]).config([
    'datepickerConfig', 
    'datepickerPopupConfig', 
    'paginationConfig',

    function(datepickerConfig, datepickerPopupConfig, paginationConfig) {
        // ui-bootstrap datepicker gloable config
        datepickerConfig.showWeeks = false;
        datepickerConfig.startingDay = 1;
        datepickerConfig.dayTitleFormat = 'yyyy年MMMM';
        datepickerPopupConfig.showButtonBar = false;
        
        // ui-bootstrap pagination gloable config
        paginationConfig.maxSize = 5;
        paginationConfig.boundaryLinks = true;
        paginationConfig.itemsPerPage = 10;
        paginationConfig.previousText = '‹';
        paginationConfig.nextText = '›';
        paginationConfig.firstText = '«';
        paginationConfig.lastText = '»';
    }
]).run([
    '$couchPotato',
    '$state',
    '$stateParams',
    '$rootScope',
    function($couchPotato, $state, $stateParams, $rootScope) {
        // by assigning the couchPotato service to the lazy property, we
        // the register functions will know to run-time-register components
        // instead of config-time-registering them.
        app.lazy = $couchPotato;

        // angular-ui-project recommends assigning these services to the root
        // scope.  Others have argued that doing so can lead to obscured
        // dependencies and that making services directly available to html and
        // directives is unclean.  In any case, the ui-router demo assumes these
        // are available in the DOM, therefore they should be on $rootScope.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.deps = function(des) {
    return ["$q", function($q) { 
        var deferred = $q.defer();
        //异步加载controller／directive/filter/service
        require.async(des, function() { 
            deferred.resolve(); 
        });
        return deferred.promise;
    }];
}

// have Couch Potato set up the registerXXX functions on the app so that
// registration of components is as easy as can be
// couchPotato托管app，负责lazyload
couchPotato.configureApp(app);
module.exports = app;
