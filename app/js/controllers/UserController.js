softUni.controller('UserController',function ($scope,$log,userData){

	$scope.alerts = [];

	$scope.createUser=function(user){
		userData.createUser(user,function(resp){
			$scope.addAlert('User account created. Please login.','success');
		});
	}

	$scope.addAlert = function(TextMsg,typeMsg) {
    	$scope.alerts.push({msg:TextMsg,type: typeMsg});
  	};

  	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	}
});