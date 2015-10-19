(function () {
  'use strict';

  angular
    .module('app.menu')
    .controller('Menu', Menu);

  Menu.$inject = ['$location'];

  function Menu($location) {

    var vm = this;

    vm.ready = false;
    vm.items = [];
    vm.menuClass = menuClass;
    vm.navigate = navigate;

    activate();

    function activate() {
      vm.ready = true;
      console.info('Activated Menu View');
      return vm.items;
    }

    function menuClass(page) {
      var current = $location.path();
      return page === current ? 'active' : '';
    }

    function navigate(location) {
      $location.path(location);
    }
  }
})();
