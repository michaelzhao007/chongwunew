/**
 * Created by michaelzhao007 on 12/28/2014.
 */
angular.module('myApp').directive('loginBar',function(){
    return{
        restrict: 'E',
        templateUrl:"../login/view/login.html",
        controller: "loginController"
    }
});
