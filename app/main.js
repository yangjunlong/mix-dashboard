require('/mix/lib/angular/angular.js');
require('/mix/lib/angular-ui-router/angular-ui-router.js');
require('/mix/lib/angular-couch-potato/angular-couch-potato.js');

//定义angular模块
var app = angular.module('app', [
    'scs.couch-potato', 
    'ui.router'
]).config([

    function(datepickerConfig, datepickerPopupConfig, paginationConfig) {
        // ui-bootstrap datepicker gloable config
        
    }
]);

module.exports = app;