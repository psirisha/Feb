// angular.module("myApp").factory("myFactory",function(){
// 	var savedData={}
// 		function set(data){
// 			savedData=data;
// 		}
// 		function get(){
// 			return savedData;
// 		}
// 		return {
// 			set:set,
// 			get:get
// 		}
	
// });
angular.module("myApp").factory("myFactory",function($q){
	var f={};
	f.post=function(url,requestdata){
    var deferred=$q.defer();
    var request={
        method:'POST',
        url:url,
        data:requestdata,
        headers:{
            'Content-Type':'application/json'
        }
	};
        $http(request).success(function(resp){
            if(resp.status== "fail"){

            }
            deferred.resolve(resp);

        }).error(function(resp){
            deferred.reject(resp);

        });
        return deferred.promise;
    }
});