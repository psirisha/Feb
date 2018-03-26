app.controller('postReq_ctrl', ["$scope","$http","myFactory","$state",function($scope,$http,myFactory,$state) {
    
$scope.$on("$viewContentLoaded",function(){
            $scope.user={};
        });


    $scope.addUser = function(){
    debugger;
    $scope.user.companyId = "5a8e8c52b9d6f51bb83ee3e7";
    myFactory.postFun($scope.user).then(function(data){
    $scope.bbbb = data;
    console.log($scope.bbbb);
    },function(err){
                if(err){
                    $scope.errorMessage = err;
                }else{
                    $scope.errorMessage = err;
    } 
    }
    )
        
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
                // console.log($scope.c);
        });
        // Drop down JobCatagory

        $http.get("jobType.json").then(function(resp){
            $scope.t = resp.data.jobType;
                // console.log($scope.t);
        });


                //Factory Sevice
        
    
     
}]);
