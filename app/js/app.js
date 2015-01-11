var softUni= angular.module('softUniModule',['ngRoute','ui.bootstrap'])
.config(function($routeProvider){
	var routePermissions = {
            isUser: {
                authenticate: function (authorization) {
                    return authorization.isUser();
                }},
            isAdmin: {
                authenticate: function (authorization) {
                    return authorization.isAdmin();
                }
            }
        };

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
	$routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/ad-publish-form.html',
        controller: 'UserPublishNewAdController',
        resolve: routePermissions.isUser
    });
	$routeProvider.otherwise({redirectTo:'/ads'});
	
});
