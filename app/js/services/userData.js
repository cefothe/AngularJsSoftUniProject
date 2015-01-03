softUni.factory('userData',['$http', 'authorization', '$q'
	,function ($http,authorization,$q){


	return{
		createUser:function(user,success){
			$http({
				method:'POST',
				url:'http://softuni-ads.azurewebsites.net/api/user/register',
				data:user
			}).success(function(data,status,headers,config){
				success(data,status);
			}).error(function(data,status,headers,config){
				success(data,status);
			})
		},

		loginUser: function(user){
			 var d = $q.defer();
            $http.post('http://softuni-ads.azurewebsites.net/api/user/login', user)
                .success(function (userLoginData) {
                    d.resolve(userLoginData);
                })
                .error(function (loginErr) {
                    d.reject(loginErr);
                });

            return d.promise;
		}
	}
}]);