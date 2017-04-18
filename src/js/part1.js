
angular.module("dangcZ.part1",[])
  .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
     .state({
     	name:"part1",
     	url:"/yes",
     	templateUrl:"html/part1.html",
     	css:"css/style1.css",
     	controller:"partOne"
     })
  



  	})
  .controller("partOne",function($scope,$timeout,$http){
      
       let chanpin = document.getElementsByClassName('chanpin');
      //点击视频分类，这个时候出现一个进度条，进度条上会显示各类的视频；
       $scope.btnclick1 = function(){
           let lss = 12.5;
           let as = function(){
            lss+=1;
            $(".chanpin").css("width",lss+"%")
            // chanpin.style.width = lss+"px";
            console.log(lss);
            if (lss>=99) {
            clearInterval(bs);
            $(".btn1").hide();
            $(".btn2").show();
           };
           }
          let bs = setInterval(as,10);

           
           // console.log(lss);

       }
       $scope.btnclick2 = function(){
           let lss = 99;
           let as = function(){
            lss-=1;
            $(".chanpin").css("width",lss+"%")
            // chanpin.style.width = lss+"px";
            console.log(lss);
            if (lss<=12.5) {
            clearInterval(bs);
            $(".btn2").hide();
            $(".btn1").show();
           };
           }
          let bs = setInterval(as,10);

           
           // console.log(lss);

       }
      //这里做一个轮播
$timeout(function(){
        swiper();
      },100);
      function swiper(){
        var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical',
            loop: true,
            autoplay:3000,
            // 如果需要分页器
            pagination: '.swiper-pagination',
    
            // // 如果需要前进后退按钮
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
    
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
  })        
      }      

  })