/**
 * Created by michaelzhao007 on 11/18/2014.
 */
/**
 * Created by michaelzhao007 on 11/17/2014.
 */
angular.module('dogModule').factory('dogFactory',function($http, $q, uriFactory) {
    var modal;
    return {
        getDogs: function(){
            return $http.get(uriFactory.geturi()+'dog/list.json').then(function(result){
                return result.data;
            });
        },
        addDog: function(dog){
        	return $http.post(uriFactory.geturi()+'dog/create.json',dog).then(function(result){
                 return result.data;
        	});
        },
        getModal: function(){
            return modal;
        },
        setModal: function(modal1){
            modal = modal1;
        }


 /*       addDogImage:function(photo,id){
        	return $http.post(
        		 uriFactory.geturi()+'dog/image/'+id+'/create.json',photo,
        		 {   headers: {'Content-Type': undefined ,'Access-Control-Allow-Origin' : '*'},
                     transformRequest: angular.identity}).then(function(result){
                 return result.data;
        	});
        }*/
    }
});
