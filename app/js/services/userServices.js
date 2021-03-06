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

            },

            publishAgainAd: function (id, success, error) {
                // TODO
            },

            getUserAd:function (id, success,error){
                var request={
                    method: 'GET',
                    url:  'http://softuni-ads.azurewebsites.net/api/user/ads/'+id,
                    headers: authorization.getAuthorizationHeaders()
                };
                $http(request).success(success).error(error);
            },

            deleteUserAd: function(id,success,error){
                var request={
                    method: 'DELETE',
                    url:  'http://softuni-ads.azurewebsites.net/api/user/ads/'+id,
                    headers: authorization.getAuthorizationHeaders()
                };
                $http(request).success(success).error(error);

                
            }
        }
    }
);