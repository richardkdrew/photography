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

    beforeEach(inject(function (_$httpBackend_) {
      $httpBackend = _$httpBackend_;

      $httpBackend.whenGET('api/v1/pictures?limit=25&offset=0')
        .respond(mockData.getMockApiResponse());
    }));

    it('should be defined', function () {
      expect(service.getPictures()).toBeDefined();
    });

    it('should return a promise', function () {
      expect(service.getPictures().then).toBeDefined();
    });

    it('should return 3 pictures', function () {
      service.getPictures().then(function(data) {
        expect(data.pictures.length).toEqual(3);
      });
      $httpBackend.flush();
    });
  });
});
