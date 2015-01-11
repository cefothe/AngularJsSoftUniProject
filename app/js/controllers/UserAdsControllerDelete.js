softUni.controller('UserAdsControllerDelete', ['$scope','$location' ,'userService', '$routeParams','mainData','$log',
    function ($scope,$location, userService, $routeParams, mainData,$log) {

    	$scope.adData={};
		userService.getUserAd($routeParams.id,function(resp){
			$scope.adData=resp;
			mainData.getAllTown(function(resp_town){
				if(resp_town.id==$scope.adData.townId){
					$scope.adData.town = resp_town.name
				};
			});
			mainData.getAllCategory(function(resp_category){
				if(resp_category.id==$scope.adData.categoryId){
					$scope.adData.category = resp_category.name
				};
			});

			$log.warn($scope.adData);
		});

		$scope.deleteAds=function(){
			userService.deleteUserAd($routeParams.id,
				function success() {
					$location.path("/user/ads");
					},
					function error(err) {

					}
				)

		}


    }]);