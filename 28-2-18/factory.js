app.factory("myFactory",['$http','$q',function($http,$q){
      return {
         postFun: function(user){
            var user=JSON.stringify(user);
            var deferred = $q.defer();
            $http.post("http://192.168.2.145:8080/ResourceAdda/rest/requirement/createRequirement",user).success(function(response){
            console.log("success");
            deferred.resolve(response);
            }).error(function(err){
            deferred.reject(err);
            })
            return deferred.promise;
            }
            }
         
   }]);