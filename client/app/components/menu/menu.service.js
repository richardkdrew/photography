(function () {
  'use strict';
  angular
    .module('app.menu')
    .factory('menuService', menuService);

  menuService.$inject = ['$q'];

  function menuService($q) {

    var self = this;
    self.menuItems = [];

    var service = {
      getMenuItems: getMenuItems

    };
    return service;

    function getMenuItems() {
      var deferred = $q.defer();

      deferred.resolve(self.menuItems);

      return deferred.promise;
    }
  }
})();
