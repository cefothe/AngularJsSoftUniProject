softUni.controller('UserAdsController',function ($scope, userService,$log){
	

	$scope.main={
		startpage: 1,
		pages:0,
		status:''
	}

	$scope.loadPage=function(){
		userService.getUserAds($scope.main,function(resp){
			$scope.data=resp;
			$scope.main.pages=resp.numPages;
			$scope.loadPagination();
		});
	}

	$scope.nextPage = function() {
                if ($scope.main.page < $scope.main.pages) {
                    $scope.main.page++;
                    $scope.loadPage();
                }
            };
            
    $scope.previousPage = function() {
                if ($scope.main.page > 1) {
                    $scope.main.page--;
                    $scope.loadPage();
                }
            };

    $scope.changePage=function($pageNumber){
    	$scope.main.page=$pageNumber;
    	$scope.loadPage();
    }

    $scope.loadPagination=function(){
		
		var jsonArrPagination = [];
		
		for (var i = 1; i <=$scope.main.pages; i++) {
			 	jsonArrPagination.push({
			    pageNumber: i
			});
		};

		$scope.pagePagination=jsonArrPagination;

    }

  $scope.filter=function(categoryId){
    	$scope.main.status=categoryId;
    	$scope.loadPage();
    }
    $scope.loadPage();
   
	
});