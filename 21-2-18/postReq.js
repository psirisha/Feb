angular.module("myApp").controller('postRReq_ctrl', function ($scope) {
    //This will hide the DIV by default.
    $scope.IsVisible = false;
        $scope.ShowHide = function () {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.ShowPassport;
        }
        $scope.uiDeveloper = false;
        $scope.UD = function () {
            //If DIV is visible it will be hidden and vice versa.
            $scope.uiDeveloper = $scope.uiDev;
        }
        $scope.uiDeveloper = false;
        $scope.UD = function () {
            //If DIV is visible it will be hidden and vice versa.
            $scope.uiDeveloper = $scope.uDev;
        }
        $scope.arrlist = [
	        {
			"JobCatagory": "Java Developer"

			}, 
			{
			"JobCatagory": "UI Developer"
			}, 
			{
			"JobCatagory": "Android Developer"
			},
			{
			"JobCatagory": "DotNet Developer"
			},
			{
			"JobCatagory": "Testing"
			}
		];
});