(function() {
  'use strict';

  angular
    .module('app.commons')
    .factory('commonsDataService', commonsDataService);

    commonsDataService.$inject = ['authToken',  'exception', 'Restangular'];

    /* @ngInject */
    function commonsDataService(authToken, exception, Restangular) {
      var service = {
        httpGETQueryParams    : httpGETQueryParams,
        httpGETRouteParams    : httpGETRouteParams
      };
      return service;

      function httpGETQueryParams(api, queryParam, apiService) {
        return apiService.one(api)
          .get(queryParam)
          .then(httpGETQueryParamsCallback)
          .catch(function(message) {

          });

        function httpGETQueryParamsCallback(response, status, header, config) {
          return Restangular.stripRestangular(response);
        }
      }

      function httpGETRouteParams(api, routeParam, queryparam, apiService) {
        return apiService.one(api, routeParam)
          .get(queryparam)
          .then(httpGETRouteParamsCallback)
          .catch(function(message) {

          });

        function httpGETRouteParamsCallback(response, status, header, config) {
          return Restangular.stripRestangular(response);
        }
      }
    }
})();
