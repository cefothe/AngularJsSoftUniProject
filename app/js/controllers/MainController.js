softUni.controller('SoftUniController',function ($scope, mainData,$log){
	
	$scope.main={
		page: 1,
		pages:0,
		categoryId:'',
		townId:''
	}

	mainData.getAllTown(function(resp){
		$scope.towns=resp;
	});

	mainData.getAllCategory(function(resp){
		$scope.categorys=resp;
	});

	$scope.loadPage=function(){
		mainData.getAllAds($scope.main.page, $scope.main.townId,$scope.main.categoryId,function(resp){
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

    $scope.filterTown=function(townId){
    	$scope.main.townId=townId;
    	$scope.loadPage();
    }

  $scope.filterCategory=function(categoryId){
    	$scope.main.categoryId=categoryId;
    	$scope.loadPage();
    }
    $scope.loadPage();
   
	
});