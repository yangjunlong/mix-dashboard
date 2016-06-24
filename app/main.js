require('/mix/lib/angular/angular.js');
require('/mix/lib/angular-ui-router/angular-ui-router.js');
require('/mix/lib/angular-couch-potato/angular-couch-potato.js');

require('/mix/lib/angular-ui-bootstrap/ui-bootstrap-tpls.js');
//require('/mix/lib/angular-loading-bar/loading-bar.js');
require('/mix/lib/angular-file-upload/angular-file-upload.js');

//定义angular模块
var app = angular.module('mix', [
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

module.exports = app;