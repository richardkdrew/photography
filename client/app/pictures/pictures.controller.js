(function () {
  'use strict';

  angular
    .module('app.pictures')
    .controller('Pictures', Pictures);

  Pictures.$inject = ['$routeParams', 'picturesService', 'navigationService'];

  function Pictures($routeParams, picturesService, navigationService) {

    var vm = this;
    vm.pictures = [];
    vm.loadMore = loadMore;
    vm.viewDetail = viewDetail;
    vm.isMobile = false;
    vm.hasMore = false;
    vm.hasSome = false;
    vm.loadingMore = false;
    vm.ready = false;

    vm.tag = '';

    activate();

    function activate() {
      return loadMore(0).then(function () {
        vm.ready = true;
        vm.isMobile = picturesService.isMobile();
        console.info('Activated Pictures View');
      });
    }

    function loadMore(offset) {
      if (vm.loadingMore) {return;}
      vm.loadingMore = true;

      // Grab the tag from the url
      vm.tag = $routeParams.tag;

      return picturesService.getPictures(vm.tag, offset).then(function (data) {
        setPictures(data);
        vm.hasMore = picturesService.hasMore();
        vm.hasSome = picturesService.hasSome();
        vm.tag = picturesService.getTag();
        vm.loadingMore = false;
        return vm.pictures;
      });
    }

    function setPictures(pictures) {
      // if the tags are different reset the pictures collection
      if (vm.tag !== picturesService.tag) {
        vm.pictures = [];
      }
      vm.pictures = vm.pictures.concat(pictures);
    }

    function viewDetail(picture) {
      picturesService.currentPicture = picture;
      navigationService.navigate('picture-detail');
    }
  }
})();
