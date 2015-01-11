softUni.factory('userService',
    function ($http, authorization) {
        return {
            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/ads',
                    headers: authorization.getAuthorizationHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url:  'http://softuni-ads.azurewebsites.net/api/user/ads',
                    headers: authorization.getAuthorizationHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            deactivateAd: function (id, success, error) {
                // TODO
            },

            publishAgainAd: function (id, success, error) {
                // TODO
            }
        }
    }
);