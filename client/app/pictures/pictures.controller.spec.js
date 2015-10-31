'use strict';

describe('controller: pictures', function () {
  var controller, mockPicturesService = {}, scope, routeProvider;

  beforeEach(function () {
    module('ngRoute');

    module(function ($provide, $routeProvider) {
      routeProvider = $routeProvider;
      spyOn(routeProvider, 'when').andCallThrough();
      spyOn(routeProvider, 'otherwise').andCallThrough();

    });

    module('app.pictures');
  });

  beforeEach(function () {

    inject(function ($rootScope, $q, $controller) {
      scope = $rootScope.$new();

      // Set up the mock pictures service
      mockPicturesService = {
        getPictures: function () {
        },
        hasSome: function () {
        },
        hasMore: function () {
        },
        getTag: function () {
        }
      };

      sinon.stub(mockPicturesService, 'getPictures', function () {
        var deferred = $q.defer();
        deferred.resolve([{
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
          }]);
        return deferred.promise;
      });

      // Set up the controller under test
      controller = $controller('Pictures', {
        $scope: scope, $routeParams: {},
        picturesService: mockPicturesService
      });
      $rootScope.$apply();
    });
  });

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  describe('function: loadMore', function () {

    it('should be defined', function () {
      expect(controller.loadMore()).toBeDefined();
    });

  });

  describe('after activate function is called', function () {

    it('should have 3 pictures loaded', function () {
      expect(controller.pictures.length).toEqual(3);
    });

    it('should have called the picturesService:getPictures method', function () {
      expect(mockPicturesService.getPictures.called).toBeTruthy();
    });
  });
});
