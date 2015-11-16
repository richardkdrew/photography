'use strict';

describe('controller: pictures', function () {
  var controller, mockPicturesService = {}, mockNavigationService = {}, scope, routeProvider;

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
        isMobile: function () {
        },
        getTag: function () {
        }
      };

      sinon.stub(mockPicturesService, 'getPictures', function () {
        var deferred = $q.defer();
        deferred.resolve(mockData.getMockPictures());
        return deferred.promise;
      });

      /*spyOn(mockPicturesService, 'hasSome').andCallFake(function () {
       return true;
       });*/

      sinon.stub(mockPicturesService, 'hasSome', function () {
        return true;
      });

      sinon.stub(mockPicturesService, 'hasMore', function () {
        return true;
      });

      sinon.stub(mockPicturesService, 'isMobile', function () {
        return false;
      });

      sinon.stub(mockPicturesService, 'getTag', function () {
        return 'testTag';
      });

      // Set up the mock pictures service
      mockNavigationService = {
        navigate: function () {
        }
      };

      // Set up the controller under test
      controller = $controller('Pictures', {
        $scope: scope, $routeParams: {},
        picturesService: mockPicturesService,
        navigationService: mockNavigationService
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

    it('should have called the picturesService:getPictures method', function () {
      expect(mockPicturesService.getPictures.called).toBeTruthy();
    });

    it('should have 3 pictures loaded', function () {
      expect(controller.pictures.length).toEqual(3);
    });

    it('should be ready', function () {
      expect(controller.ready).toEqual(true);
    });

    it('should have some pictures', function () {
      expect(controller.hasSome).toEqual(true);
    });

    it('should have more pictures to retrieve', function () {
      expect(controller.hasMore).toEqual(true);
    });

    it('should have a tag', function () {
      expect(controller.tag).toEqual('testTag');
    });
  });
});
