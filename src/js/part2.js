
angular.module("dangcZ.part2",[])
  .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state({
     	name:"part2",
     	url:"/yesbaby",
     	templateUrl:"html/part2.html",
      css:"css/style2.css",
      params:{
        num:0
      },
     	controller:"partTwo"
     })
  



  	})
  .controller("partTwo",function($scope,$http,$stateParams){
        

  })