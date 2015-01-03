var softUni= angular.module('softUniModule',['ngRoute','ui.bootstrap'])
.config(function($routeProvider){
	$routeProvider.when('/register',{
		templateUrl:'templates/register.html',
		controller:'UserController'
	})
	$routeProvider.when('/ads',{
		templateUrl:'templates/all-ads.html'
	});
	$routeProvider.when('/login',{
		templateUrl:'templates/login.html',
		controller:'UserController'
	});
	$routeProvider.otherwise({redirectTo:'/ads'});
	
});
