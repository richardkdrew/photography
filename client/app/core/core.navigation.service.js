(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('navigationService', navigationService);

  navigationService.$inject = ['$location'];

  function navigationService($location) {

    var service = {
      navigate : navigate,
    };

    return service;

    function navigate(path) {
      $location.path(path);
    }
  }
})();
