'use strict';

describe('config block', function () {
  var routeProvider, route;

  beforeEach(function () {
    module('ngRoute');

    module(function ($provide, $routeProvider) {
      routeProvider = $routeProvider;
      spyOn(routeProvider, 'when').andCallThrough();
      spyOn(routeProvider, 'otherwise').andCallThrough();
    });

    module('app.pictures');
  });

  describe('config block tests', function () {
    it('should have called registered 1 route', function () {
      // Otherwise internally calls when. So, call count of when has to be 2
      expect(routeProvider.when.callCount).toBe(2);
    });

    it('should have registered a default route', function () {
      expect(routeProvider.otherwise).toHaveBeenCalled();
    });

    beforeEach(inject(function ($route) {
      route = $route;
    }));

    it('should have a default route', function () {
      var defaultRoute = route.routes['null'];
      expect(defaultRoute).toBeDefined();
    });

    it('should have a pictures route with right template, controller and controllerAs block', function () {
      var picturesRoute = route.routes['/pictures'];
      expect(picturesRoute).toBeDefined();
      expect(picturesRoute.controller).toEqual('Pictures');
      expect(picturesRoute.controllerAs).toEqual('vm');
      expect(picturesRoute.templateUrl).toEqual('app/pictures/pictures.html');
    });

  });
});
