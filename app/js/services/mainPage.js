softUni.factory('mainData',function ($http, $log){

	return{
		getAllAds:function(startPage,townId,categoryId,success){
			$http({
				method:'GET',
				url:'http://softuni-ads.azurewebsites.net/api/ads?startPage='+startPage+'&townId='+townId+'&categoryId='+categoryId
			}).success(function(data,status,headers,config){
				success(data);
			}).error(function(data,status,headers,config){
				$log.warn(data);
			});
		},
		getAllTown:function(success){
			$http({
				method:'GET',
				url:'http://softuni-ads.azurewebsites.net/api/towns'
			}).success(function(data,status,headers,config){
				success(data);
			}).error(function(data,status,headers,config){
				$log.warn(data);
			});
		},
		getAllCategory:function(success){
			$http({
				method:'GET',
				url:'http://softuni-ads.azurewebsites.net/api/categories'
			}).success(function(data,status,headers,config){
				success(data);
			}).error(function(data,status,headers,config){
				$log.warn(data);
			});
		}

	}

})