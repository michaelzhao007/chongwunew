'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'loginModule',
  'dogModule'
])
.config(['$httpProvider','$routeProvider',function($httpProvider,$routeProvider){
  $httpProvider.defaults.useXDomain = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.interceptors.push('TokenInterceptor');
        $routeProvider.when('/listDog', {
            templateUrl: 'dog/view/listDog.html'
        }).when('/', {
            templateUrl: 'search/view/search.html'
        }).otherwise({
           templateUrl: 'search/view/search.html'
        });
}])
    .run(function($cookieStore, $location){
       if($cookieStore.get('uerLoginStatus')!=true){
           $location.path('/');
       }
    });

angular.module('loginModule', ['ngRoute','ngCookies','angularFileUpload','ui.bootstrap']);
angular.module('dogModule', ['ngRoute','ngCookies','angularFileUpload','ui.bootstrap']);

