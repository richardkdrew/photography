(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataService', dataService);

  dataService.$inject = ['$q', '$http'];

  function dataService($q, $http) {

    var self = this;
    self.pictures = [];
    self.tags = [];

    var service = {
      getPictures: getPictures
    };

    return service;

    function getPictures(tag) {
      var deferred = $q.defer();

      $http.get('api/v1/pictures')
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
