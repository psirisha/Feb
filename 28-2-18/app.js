var app = angular.module("myApp",["ui.router"]);
	app.controller("myCtrl",function(){
		

	});
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/main")
	$stateProvider
	.state("main",{
		url:"/main",
		templateUrl:"main.html"
	})
	.state("main.table-CURD",{
		url:"/main.table-CURD",
		templateUrl:"table-CURD.html",
		controller:"table-Ctrl"
	})
	.state("main.postReq",{
		url:"/main.postReq",
		templateUrl:"postReq.html"
	})
	// .state("main.edit",{
	// 	url:"/main.edit",
	// 	templateUrl:"edit.html",
	// 	controller:"edit_ctrl"
	// })
});