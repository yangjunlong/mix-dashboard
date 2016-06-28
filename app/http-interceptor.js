/**
 * $http 统一拦截处理
 * 
 * @author  Yang,junlong at 2016-05-20 14:46:33 build.
 * @version $Id$
 */

// angular spa module
var app = require('app.js');

// app 拦截器 工厂
app.factory('appInterceptor', ['$rootScope', '$q', '$log', '$location', function($rootScope, $q, $log, $location) {
    return {
        /**
         * 拦截请求
         * 
         * 该方法会在 $http 发送请求道后台之前执行，因此你可以修改配置或做其他的操作。
         * 该方法接收请求配置对象(request configuration object)作为参数，然后必须返回配置对象或者 promise 。
         * 如果返回无效的配置对象或者 promise 则会被拒绝，导致 $http 调用失败。
         */
        request: function(request) {
            request.requestTimestamp = new Date().getTime();

            // request.headers = { 
            //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            // };
            // request.transformRequest = function(obj) {
            //     var str = [];
            //     for (var p in obj) {
            //         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            //     }
            //     return str.join('&');
            // };

            if (request.method === 'GET' && request.url) {
                request.params = request.params || {};
                
                //request.params['_'] = new Date().getTime();
            }
            return request;
        },

        /**
         * 拦截响应
         * 
         * 该方法会在 $http 接收到从后台过来的响应之后执行，因此你可以修改响应或做其他操作。
         * 该方法接收响应对象(response object)作为参数，然后必须返回响应对象或者 promise。
         * 响应对象包括了请求配置(request configuration)，头(headers)，状态(status)和从后台过来的数据(data)。
         * 如果返回无效的响应对象或者 promise 会被拒绝，导致 $http 调用失败。
         */
        response: function(response) {
            return response;
        },

        /**
         * 拦截请求异常
         * 
         * 有时候一个请求发送失败或者被拦截器拒绝了。
         * 请求异常拦截器会俘获那些被上一个请求拦截器中断的请求。
         * 它可以用来恢复请求或者有时可以用来撤销请求之前所做的配置，比如说关闭进度条，激活按钮和输入框什么之类的。
         */
        requestError: function (response) {
            $log.error(response);
            return response;
        },

        /**
         * 拦截响应异常
         * 
         * 有时候我们后台调用失败了。也有可能它被一个请求拦截器拒绝了，或者被上一个响应拦截器中断了。
         * 在这种情况下，响应异常拦截器可以帮助我们恢复后台调用。
         */
        responseError: function (response) {
            $log.error(response);
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
}]);

/**
 * config $httpProvider
 * 
 * @see https://docs.angularjs.org/api/ng/provider/$httpProvider
 */
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('appInterceptor');
}]);
