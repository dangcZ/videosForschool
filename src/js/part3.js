angular.module("dangcZ.part3",[])
  .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state({
     	name:"part3",
     	url:"/yesbabys",
     	templateUrl:"html/part3.html",
      css:"css/style3.css",
     	controller:"partThree"
     })
  



  	})
  .controller("partThree",function($scope){
         $scope.num = 1;
        $scope.fx = function(num){
          $scope.num++;
        }
        $scope.numy = 0;
        // var quan = document.getElementsByClassName('quan');
        $scope.fn = function(){
          $scope.numy++;
        }
  })