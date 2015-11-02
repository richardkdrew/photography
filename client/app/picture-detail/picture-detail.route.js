(function() {
  'use strict';

  angular.module('app.picture-detail')
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/picture-detail', {
        templateUrl: 'app/picture-detail/picture-detail.html',
        controller: 'PictureDetail',
        controllerAs: 'vm'
      });
  }
})();

