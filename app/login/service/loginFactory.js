/**
 * Created by michaelzhao007 on 11/17/2014.
 */
angular.module('loginModule').factory('loginFactory',function($http, $q,uriFactory) {
   return {
     login: function(user){
         return $http.post(uriFactory.geturi()+'login.json',user).then(function(result){
             return result.data
         });
     }
   }
});
