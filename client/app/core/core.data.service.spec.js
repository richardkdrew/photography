'use strict';

describe('factory: dataService', function () {
  var service;

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
  });
});
