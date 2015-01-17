/**
 * Created by michaelzhao007 on 11/17/2014.
 */
/**
 * Created by michaelzhao007 on 11/17/2014.
 */
angular.module('loginModule').controller('loginController',function($scope,$http,loginFactory,$cookieStore,$location,alert) {
    $scope.signinFlag = $cookieStore.get('uerLoginStatus');
    $scope.loginUser = function(user){
         loginFactory.login(user).then(function(data) {
             if (data.status == "200") {
                 $cookieStore.put('token',data.responseBody.token);
                 $cookieStore.put('uerLoginStatus', true);
                 $scope.signinFlag = true;
                 $location.path('/listDog');
                 alert('success ','ok! ','You are now logged in!');
             }
             else {
                 alert('warning','Opps',' Your username or password is wrong!');
             }
         });

    };

    $scope.logout = function() {
        $cookieStore.remove("token");
        $cookieStore.remove("uerLoginStatus");
        $scope.signinFlag = false;
        $location.path('/');
    };


});

