softUni.controller('UserPublishNewAdController',
	function ($scope, mainData,userService, $location,$log) {
		$scope.adData = {townId: null, categoryId: null};
		
		mainData.getAllTown(function(resp){
			$scope.towns=resp;
		});

		mainData.getAllCategory(function(resp){
			$scope.categorys=resp;
		});

		$scope.publishAd = function(adData) {
		userService.createNewAd(adData,
		function success() {
			$location.path("/user/ads");
			},
		function error(err) {

			}
		);
	};

$scope.fileSelected = function(fileInputField) {
    delete $scope.adData.imageDataUrl;
    var file = fileInputField.files[0];
    if (file.type.match(/image\/.*/)) {
        var reader = new FileReader();
        reader.onload = function() {
            $scope.adData.imageDataUrl = reader.result;
            $(".image-box").html("<img src='" + reader.result + "'>");
        };
        reader.readAsDataURL(file);
    } else {
        $(".image-box").html("<p>File type not supported!</p>");
    }
};;
});