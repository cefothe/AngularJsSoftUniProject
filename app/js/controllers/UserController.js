softUni.controller('UserController',function ('$q',$scope,$log,userData, authorization,$location){

	$scope.alerts = [];

	$scope.createUser=function(user){
		userData.createUser(user,function(resp,status){
			if(status==200){
				authorization.setLocalUser(resp);
                $location.path('/user/home');
			}else{
				$scope.addAlert('User is not created','danger');
			}
		});
	}

	$scope.loginUser=function(user){
		userData.loginUser(user).then(
				function(loginSuccessData){
					authorization.setLocalUser(loginSuccessData);
                    $location.path('/user/home');
				},
				function(loginError){
					$scope.addAlert('Error login user!','danger');
				}
			)
	}

	
	$scope.addAlert = function(TextMsg,typeMsg) {
    	$scope.alerts[0]=({msg:TextMsg,type: typeMsg});
  	};

  	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	}
});