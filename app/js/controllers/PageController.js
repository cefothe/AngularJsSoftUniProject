softUni.controller('PageController', ['$scope', 'authorization', 'userData', '$location',
    function ($scope, authorization, userData, $location) {
        $scope.authorization = authorization;
        $scope.userData = userData;
        $scope.location = $location;
    }]);	