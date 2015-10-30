'use strict';

describe('factory: picturesService', function () {
  var service, mockDataService, routeProvider;

  beforeEach(function () {
    module('ngRoute');

    module(function ($provide, $routeProvider) {
      routeProvider = $routeProvider;
      spyOn(routeProvider, 'when').andCallThrough();
      spyOn(routeProvider, 'otherwise').andCallThrough();

      mockDataService = {
        getPictures     : function (tag) {}
      };
      $provide.value('dataService', mockDataService);
    });

    module('app.pictures');
  });

  beforeEach(function () {
    inject(function($injector) {
      service = $injector.get('picturesService');
    })
  });

  it('should be defined', function ()
  {
    expect(service).toBeDefined();
  });

  /*describe('function: getPictures', function() {

    it('should be defined', function () {
      expect(service.getPictures()).toBeDefined();
    });

    it('should return a promise', function () {
      expect(service.getPictures().then).toBeDefined();
    });
  });*/
});
