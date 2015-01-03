softUni.factory('userData',function ($http, $log){

	return{
		createUser:function(user,success){
			$http({
				method:'POST',
				url:'http://softuni-ads.azurewebsites.net/api/user/register',
				data:user
			}).success(function(data,status,headers,config){
				success(data);
			}).error(function(data,status,headers,config){
				$log.warn(data);
			})
		}
	}
});