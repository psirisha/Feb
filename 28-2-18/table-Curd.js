app.controller("table-Ctrl",function($scope,$http,$state,myFactory){
		$http.get("http://192.168.2.145:8080/ResourceAdda/rest/requirement/listRequirements/1/20").then(function(resp){
			$scope.tableDetails = resp.data;
			// console.log($scope.tableDetails);
		
		});
		
		// $scope.$on('eventName', function (event, args) {
 	// 		$scope.postaReq = args.postaReq;
 	// 		console.log($scope.postaReq);
 	// 	});
 		$scope.addDetails=function(){
 			//myFactory.postFun();
 			$state.go("main.postReq");
 		}
 		
	});
	

                   