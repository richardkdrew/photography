(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataService', dataService);

  dataService.$inject = ['$q', '$http'];

  function dataService($q, $http) {

    var service = {
      getPictures: getPictures
    };

    return service;

    function getPictures(tag, offset, limit) {
      var deferred = $q.defer();

      $http.get('api/v1/pictures', {
        params: {
          tags: tag,
          offset: offset,
          limit: limit
        }
      })
        .success(getPicturesComplete)
        .error(getPicturesFailed);

      function getPicturesComplete(data) {
        deferred.resolve(data);
      }

      function getPicturesFailed(error, data) {
        console.error('XHR Failed for getPictures.' + error, data);
        deferred.reject(error, data);
      }

      return deferred.promise;
    }
  }
})();
