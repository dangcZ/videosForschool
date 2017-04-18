//首先建立模块，然后路由在app.js写好大概，详细的还要在子页面的js写；
angular.module("dangcZ", ["ui.router","angularCSS",
        "dangcZ.part1",
		"dangcZ.part2",
		"dangcZ.part3"])
	// 	"sunckAXF.marketPage",
	// 	"sunckAXF.cartPage",
	// 	"sunckAXF.minePage"
	// ])

	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/yes");
	
	
	
	
	})