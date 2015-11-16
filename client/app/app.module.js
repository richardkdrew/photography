(function () {
  'use strict';

  angular
    .module('app', [
    /*
     * Application core modules
     */
    'app.core',
    /*
     * Feature areas
     */
    'app.pictures',
    'app.picture-detail',
    'app.menu'
  ])
  .run(Run);

  Run.$inject = ['$rootScope', 'navigationService'];

  function Run($rootScope, navigationService) {
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
      $rootScope.animation = currRoute.animation;
    });

    $rootScope.$on('navigate.back', function(event, args){
      navigationService.navigate(args.target);
    });
  }

})();
