angular.module("myApp").controller('postReq_ctrl', function ($scope,$http) {
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
        $http.get("primarySkills.json").then(function(resp){
            $scope.primary = resp.data.PrimarySkills;
            // console.log($scope.primary);
            // $scope.primaryOptions = function (choice) {
            //     var details = [];
            //         angular.forEach(choice, function (value, key) {
            //             if (choice[key].checked) {
            //                 details.push(choice[key].primary);
            //             }
            //         });
            //         if (details.length > 0)
            //             $scope.msg = 'Selected';
            //         // : '+details.toString();
            //             else
            //         $scope.msg = 'Please choose an option';
            //     };
            $scope.primary_checkAll = function () {  
                if ($scope.selectedAll) {  
                $scope.selectedAll = true;  
                } else {  
                $scope.selectedAll = false;  
                }  
                angular.forEach($scope.primary, function (item) {  
                item.Selected = $scope.selectedAll;  
                });  
            }; 
        });
        $http.get("secondarySkills.json").then(function(resp){
            $scope.secondary = resp.data.secondarySkills;
            $scope.secondary_checkAll = function () {  
                if ($scope.selectedAll1) {  
                $scope.selectedAll1 = true;  
                } else {  
                $scope.selectedAll1 = false;  
                }  
                angular.forEach($scope.secondary, function (item1) {  
                item1.Selected = $scope.selectedAll1;  
                });  
            }; 
        });
        $http.get("jobCategory.json").then(function(resp){
            $scope.jobCategory = resp.data.jobCategory;
            console.log($scope.jobCategory);
        });
});