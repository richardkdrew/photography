(function () {
  'use strict';

  angular
    .module('app.pictures')
    .factory('picturesService', picturesService);

  picturesService.$inject = ['$q', 'dataService'];

  function picturesService($q, dataService) {

    var self = this;

    // Initialise some local params for paging and pictures
    self.pictures = [];
    self.paging = {};
    self.tag = '';

    var service = {
      getPictures : getPictures,
      hasMore     : hasMore,
      hasSome     : hasSome,
      getTag      : getTag
    };
    return service;

    function getPictures(tag) {
      var deferred = $q.defer();

      dataService.getPictures(tag).then(getPicturesComplete, getPicturesFailed);

      function getPicturesComplete(data) {
        self.paging = data.meta.paging;
        deferred.resolve(data.pictures);
      }

      function getPicturesFailed(data, code) {
        console.error('Failed to retrieve Pictures', code, data);
        deferred.reject(data);
      }

      return deferred.promise;
    }

    function hasMore() {
      return (self.paging.limit + self.paging.offset) < self.paging.total;
    }

    function hasSome() {
      return self.paging.total > 0;
    }

    function getTag() {
      return self.tag;
    }
  }
})();
