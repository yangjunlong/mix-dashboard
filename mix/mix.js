/**
 * mix framework bootstrap script
 * 
 * @author  Yang,junlong at 2016-06-24 14:34:09 build.
 * @version $Id$
 */

require('lib/angular/angular.js');
require('lib/angular-ui-router/angular-ui-router.js');
require('lib/angular-couch-potato/angular-couch-potato.js');

require('lib/angular-ui-bootstrap/ui-bootstrap-tpls.js');
//require('/mix/lib/angular-loading-bar/loading-bar.js');
require('lib/angular-file-upload/angular-file-upload.js');

//定义angular模块
var mix = angular.module('mix', [
    'scs.couch-potato', 
    'ui.router',
    'ui.bootstrap', 
    'ui.bootstrap.tpls',
    //'chieffancypants.loadingBar',
    'angularFileUpload',
]).config([

    function(datepickerConfig, datepickerPopupConfig, paginationConfig) {
        // ui-bootstrap datepicker gloable config
        
    }
]);

module.exports = mix;
