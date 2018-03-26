angular.module("myApp").controller('postReq_ctrl', function ($scope,$http,$location,myFactory) {
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

        // checkBox primarySkills

        $http.get("primarySkills.json").then(function(resp){
            $scope.primary = resp.data.PrimarySkills;
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

         // checkBox secondarySkills

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

        // Drop down JobCatagory

        $http.get("jobCategory.json").then(function(resp){
            $scope.c = resp.data.jobCategory;
                console.log($scope.c);
        });
        // Drop down JobCatagory

        $http.get("jobType.json").then(function(resp){
            $scope.t = resp.data.jobType;
                console.log($scope.t);
        });

        
        // $scope.add=function(){
        //     $scope.d=myFactory.get();
        //     $scope.details={};
        //     // $location.path("/main.table-CURD");
        //      // // $scope.employees.push(employee);
        //      // console.log( $scope.d);
        //       $scope.d.push($scope.details);
        //     console.log( $scope.details);
        // };
         $scope.add=function(){
            myFactory.post("http://192.168.2.145:8080/ResourceAdda/rest/requirement/createRequirement").then(function(resp){
                if(resp.status=="success"){
                    $scope.orgName=angular.copy(resp.result);
                    console.log($scope.orgName);
                }
                else if(resp.status=='fail'){
                    console.log ("Failed... Please Try Again"); 
                }
            });
        }
});
