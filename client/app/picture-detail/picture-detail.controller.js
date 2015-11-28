(function () {
  'use strict';

  angular
    .module('app.picture-detail')
    .controller('PictureDetail', PictureDetail);

  PictureDetail.$inject = ['picturesService'];

  function PictureDetail(picturesService) {

    var vm = this;
    vm.picture = undefined;
    vm.ready = false;

    activate();

    function activate() {
      vm.picture = picturesService.currentPicture;
        vm.ready = true;
        console.info('Activated Picture Detail View');
    }
  }
})();
