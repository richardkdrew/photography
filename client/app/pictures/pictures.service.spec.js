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
        getPictures: function (tag) {
        }
      };

      sinon.stub(mockDataService, 'getPictures', function () {
        var deferred = $q.defer();
        deferred.resolve(
          {
            meta: {
              paging: {limit: 3, offset: 0, total: 52},
              result: {status: 'ok'}
            },
            pictures: [{
              "id": "16414316734",
              "title": "5D3_7127 - Version 2",
              small: {
                url: 'https://farm9.staticflickr.com/8772/16414316734_25428bc7d7.jpg',
                width: 500,
                height: 333
              },
              medium: {
                url: 'https://farm9.staticflickr.com/8772/16414316734_25428bc7d7_c.jpg',
                width: 800,
                height: 534
              },
              large: {
                url: 'https://farm9.staticflickr.com/8772/16414316734_29877870d4_o.jpg',
                width: 5298,
                height: 3532
              },
              tags: ['wedding', 'bentley']
            },
            {
              id: '16850528669',
              title: '5D3_7114 - Version 2',
              small: {
                url: 'https://farm9.staticflickr.com/8808/16850528669_b01e0b57a8.jpg',
                width: 500,
                height: 333
              },
              medium: {
                url: 'https://farm9.staticflickr.com/8808/16850528669_b01e0b57a8_c.jpg',
                width: 800,
                height: 533
              },
              large: {
                url: 'https://farm9.staticflickr.com/8808/16850528669_68899b010b_o.jpg',
                width: 5071,
                height: 3379
              },
              tags: ['wedding', 'bentley']
            },
            {
              id: '16829340237',
              title: '5D3_7111 - Version 2',
              small: {
                url: 'https://farm9.staticflickr.com/8761/16829340237_b41b271931.jpg',
                width: 500,
                height: 333
              },
              medium: {
                url: 'https://farm9.staticflickr.com/8761/16829340237_b41b271931_c.jpg',
                width: 800,
                height: 534
              },
              large: {
                url: 'https://farm9.staticflickr.com/8761/16829340237_a44f7023d5_o.jpg',
                width: 5760,
                height: 3840
              },
              tags: ['wedding', 'bentley']
            }]
          });
        return deferred.promise;
      });

      $provide.value('dataService', mockDataService);
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
