 angular.module('dogModule').controller('createDogController',function($rootScope,$scope,$http,$upload,$modal,dogFactory,uriFactory) {
   $scope.selectedFile = [];
   $scope.uploadProgess = 0;
 
    $scope.identities = ["male","female"];

 $scope.uploadFile = function(id) {
    var file = $scope.files[0];
    $scope.upload = $upload.upload({
       url: uriFactory.geturi()+'dog/image/'+id+'/create.json',
       method: 'POST',
       data:{photo: file}
    }).success(function(data){
      $scope.msg = {success: "You have successfully added your dog for adoption"};
      $rootScope.$broadcast('createsuccess');

    });
   };

  $scope.cancel = function () {
        dogFactory.getModal().close();
  };

   $scope.addDog = function(dog){
   	 var addDogRes = {};
     dogFactory.addDog(dog).then(function(data){
        console.log(data);
        addDogRes.status = data.status; 
        addDogRes.id = data.responseBody.id;
        if(addDogRes.status=="200") {
          $scope.uploadFile(addDogRes.id);
         }         
        });
      
     
   };

 });