'use strict';

describe('factory: dataService', function () {
  var service, $httpBackend;

  beforeEach(module('app.core'));

  beforeEach(function () {

    inject(function($injector) {
      service = $injector.get('dataService');
    })
  });

  it('should be defined', function ()
  {
    expect(service).toBeDefined();
  });

  describe('function: getPictures', function() {

    it('should be defined', function () {
      expect(service.getPictures()).toBeDefined();
    });

    it('should return a promise', function () {
      expect(service.getPictures().then).toBeDefined();
    });

    describe('successful api call', function () {

      beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;

        $httpBackend.whenGET('api/v1/pictures?limit=52&offset=0')
          .respond(mockData.getMockApiResponse());
      }));

      it('should return 3 pictures', function () {
        service.getPictures(null, 0, 52).then(function(data) {
          expect(data.pictures.length).toEqual(3);
        });
        $httpBackend.flush();
      });

    });

    describe('unsuccessful api call', function () {

      beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;

        $httpBackend.whenGET('api/v1/pictures?limit=52&offset=0')
          .respond(500, 'Internal Server Error');
      }));

      it('should handle errors', function () {
        service.getPictures(null, 0, 52).then(function(error) {
          expect(error).toEqual(500);
        });
        $httpBackend.flush();
      });

    });
  });
});
