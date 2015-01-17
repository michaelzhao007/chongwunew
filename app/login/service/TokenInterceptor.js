/**
 * Created by michaelzhao007 on 11/18/2014.
 */
angular.module('loginModule').factory('TokenInterceptor',function($q,$window,$location, $cookieStore) {
    return{
        request: function (config) {
            config.headers = config.headers || {};
            if ($cookieStore.get('token')) {
                config.headers['token'] = $cookieStore.get('token');
            }
            return config;
        }
    };
});
