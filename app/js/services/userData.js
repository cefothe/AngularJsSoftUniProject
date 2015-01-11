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
		},
		logOut: function logout() {
            var d = $q.defer(),
                headers = authorization.getAuthorizationHeaders();
            $http.post(userServiceUrl + '/logout', {}, {headers: headers})
                .success(function (userLogoutData) {
                    authorization.setLocalUser(undefined);
                    authorization.removeAuthorizationHeaders();
                    d.resolve(userLogoutData);
                })
                .error(function (logoutErr) {
                    d.reject(logoutErr);
                });

            return d.promise;
        }

	}
}]);