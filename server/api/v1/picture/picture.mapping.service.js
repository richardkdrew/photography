'use strict';

var q = require("q");

module.exports = pictureMappingService;

function pictureMappingService() {

  var service = {
    mapPicturesResponse: mapPicturesResponse
  };

  return service;

  function mapPicturesResponse(data) {
    var deferred = q.defer();

    deferred.resolve(doMapping(data));

    return deferred.promise;
  }

  function doMapping(data){
    var payload = data;
    var picturesResponse = {};
    picturesResponse.meta = {};

    picturesResponse.meta.paging = getPagingMetadata(payload);
    picturesResponse.meta.result = mapResultMetadata(payload);

    if (payload.photos.photo && payload.photos.photo.length > 0) {
      picturesResponse.pictures = mapPictures(payload.photos.photo);
    }


    return picturesResponse;

    function mapPictures(pictures) {
      var mappedPictures = [];

      pictures.forEach(function (element) {

        var picture = {
          id: element.id,
          title: element.title,
          small: {
            url: element.url_m,
            width: Number(element.width_m),
            height: Number(element.height_m)
          },
          medium:
          {
            url: element.url_c,
            width: Number(element.width_c),
            height: Number(element.height_c)
          },
          large:
          {
            url: element.url_o,
            width: Number(element.width_o),
            height: Number(element.height_o)
          },
          tags: element.tags.split(" ")
        };
        mappedPictures.push(picture);
      });
      // Sort by id
      pictures.sort(function (a, b) {
        return a.id - b.id
      });

      return mappedPictures;
    }

    function mapResultMetadata(payload) {
      var mappedResult = {};
      mappedResult.status = payload.stat;
      mappedResult.code = payload.code;
      mappedResult.message = payload.message;

      return mappedResult;
    }

    function getPagingMetadata(payload) {
      var paging = {};
      paging.limit = Number(payload.photos.perpage);
      paging.offset = Number((payload.photos.page * paging.limit) - paging.limit);
      paging.total = Number(payload.photos.total) || 0;

      return paging;
    }
  }
}
