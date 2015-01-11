softUni.controller('UserPublishNewAdController',
	function ($scope, $location, mainPage) {
		$scope.adData = {townId: null, categoryId: null};
		
		$scope.publishAd = function(adData) {
		userService.createNewAd(adData,
		function success() {
			$location.path("/user/ads");
			},
		function error(err) {

			}
		);
	};
});