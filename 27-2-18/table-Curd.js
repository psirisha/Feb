	angular.module("myApp").controller("table-Ctrl",function($scope,$http,$state){
		$http.get("http://192.168.2.145:8080/ResourceAdda/rest/requirement/listRequirements/1/20").then(function(resp){
			$scope.tableDetails = resp.data;
			console.log($scope.tableDetails);
		
		});
		$scope.addDetails = function(d){
			// myFactory.set(d);
			// $scope.details={};
			$state.go("main.postReq");
			
		}
	});