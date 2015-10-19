(function () {
  'use strict';

  angular
    .module('app.pictures')
    .controller('Pictures', Pictures);

  function Pictures() {

    var vm = this;
    vm.hasSome = false;
    vm.ready = false;

    activate();

    function activate() {
      vm.ready = true;
      console.info('Activated Pictures View');
    }
  }
})();
