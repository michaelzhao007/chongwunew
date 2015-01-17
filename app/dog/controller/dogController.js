/**
 * Created by michaelzhao007 on 11/18/2014.
 */
angular.module('dogModule').controller('dogController',function($rootScope,$scope,$http,$upload,$modal,dogFactory,uriFactory) {
    $scope.getDogList = function(){
        dogFactory.getDogs().then(function(data){
              $scope.dogList  = data.responseBody;
        });
    };
    $rootScope.$on('createsuccess',function(event){
       $scope.getDogList();
    });

    $scope.getDogList();

   $scope.showCreate = false;
   $scope.showCreateForm =function(){
   	$scope.showCreate = true;
   };

  
   


$scope.createDogModal = function(){
   var modal = $modal.open({
    templateUrl: 'dog/view/addDog.html',
    controller: 'createDogController'
  });
   dogFactory.setModal(modal);
};
   


});