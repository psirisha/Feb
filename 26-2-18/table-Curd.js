	angular.module("myApp").controller("table-Ctrl",function($scope,$http,$location,myFactory){
		$http.get("table-Curd.json").then(function(resp){
			$scope.tableDetails = resp.data.tableData;
			console.log($scope.tableDetails);
		
		});
		$scope.Edit = function(d){
			myFactory.set(d);
			$location.path("/main.postReq");
		}
	});