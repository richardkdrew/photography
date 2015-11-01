(function () {
  'use strict';

  angular
    .module('app.pictures')
    .factory('picturesService', picturesService);

  picturesService.$inject = ['$q', 'dataService', 'detectionService'];

  function picturesService($q, dataService, detectionService) {

    var self = this;

    // Initialise some local params for paging and pictures
    self.paging = {};
    self.tag = '';

    var service = {
      getPictures: getPictures,
      hasMore: hasMore,
      hasSome: hasSome,
      getTag: getTag
    };
    return service;

    function getPictures(tag) {
      var deferred = $q.defer();

      var offset = getPagingOffset();
      var limit = getPagingLimit();

      dataService.getPictures(tag, offset, limit).then(getPicturesComplete, getPicturesFailed);

      function getPicturesComplete(data) {
        self.paging = data.meta.paging;
        self.tag = tag;
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

    function getPagingLimit() {
      var perPage = 52;
      if (detectionService.isMobile()) {
        perPage = 16;
      }
      return perPage;
    }

    function getPagingOffset() {
      var offset = 0;

      if (self.paging.offset !== undefined && self.paging.limit !== undefined) {
        offset = (self.paging.offset + self.paging.limit);
      }

      return offset;
    }
  }
})();
