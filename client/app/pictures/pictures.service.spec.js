'use strict';

describe('factory: picturesService', function () {
  var service, mockDataService, mockDetectionService, routeProvider;

  beforeEach(function () {
    module('ngRoute');

    module(function ($provide, $routeProvider) {
      routeProvider = $routeProvider;
      spyOn(routeProvider, 'when').andCallThrough();
      spyOn(routeProvider, 'otherwise').andCallThrough();

      mockDataService = {
        getPictures: function (tag) {
        }
      };

      sinon.stub(mockDataService, 'getPictures', function () {
        var deferred = $q.defer();
        deferred.resolve(mockData.getMockApiResponse());
        return deferred.promise;
      });

      mockDetectionService = {
        isMobile: function () {}
      };

      sinon.stub(mockDetectionService, 'isMobile', function() {
        return false;
      });

      $provide.value('dataService', mockDataService);
      $provide.value('detectionService', mockDetectionService);
    });

    module('app.pictures');
  });

  beforeEach(function () {
    inject(function ($injector) {
      service = $injector.get('picturesService');
    })
  });

  it('should be defined', function () {
    expect(service).toBeDefined();
  });

  describe('function: getTag', function () {

    it('should be defined', function () {
      expect(service.getTag()).toBeDefined();
    });

  });

  describe('function: hasSome', function () {

    it('should be defined', function () {
      expect(service.hasSome()).toBeDefined();
    });

    /*it('should return true when there are some pictures', function () {
      service.getPictures();
      expect(service.hasSome()).toEqual(true);
    });*/

  });

  describe('function: hasMore', function () {

    it('should be defined', function () {
      expect(service.hasMore()).toBeDefined();
    });

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
