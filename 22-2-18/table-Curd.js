	angular.module("myApp").controller("table-Ctrl",function($scope,$http){
		$http.get("table-Curd.json").then(function(resp){
			$scope.tableDetails = resp.data.tableData;
			console.log($scope.tableDetails);
		});
	});