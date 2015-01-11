var softUni= angular.module('softUniModule',['ngRoute','ngResource','ui.bootstrap'])
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
		templateUrl:'templates/all-ads.html',
		controller:'SoftUniController'
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
    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/all-ads-user.html',
        controller: 'UserAdsController',
        resolve: routePermissions.isUser
    });
    $routeProvider.when('/user/ads/delete/:id',{
        templateUrl: 'templates/ads-delete.html',
        controller: 'UserAdsControllerDelete',
        resolve: routePermissions.isUser
    });
    $routeProvider.when('/user/ads/delete/:id',{
        templateUrl: 'templates/ads-delete.html',
        controller: 'UserAdsControllerDelete',
        resolve: routePermissions.isUser
    });
    
	$routeProvider.otherwise({redirectTo:'/ads'});
	
});
