softUni.controller('SoftUniController',function ($scope, mainData){
	
	mainData.getAllAds(function(resp){
		$scope.data=resp;
	});

	mainData.getAllTown(function(resp){
		$scope.towns=resp;
	});

	mainData.getAllCategory(function(resp){
		$scope.categorys=resp;
	})
});