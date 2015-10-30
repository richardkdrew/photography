'use strict';

var q = require("q");
var pictureDataService = require("./picture.data.service.js")();
var pictureMappingService = require("./picture.mapping.service.js")();

module.exports = pictureService;

function pictureService() {

  var service = {
    getPictures: getPictures
  };

  return service;

  function getPictures(req) {
    var deferred = q.defer();

    console.log('in pictures service');

    var defaultSettings = {
      defaults: {
        offset: 0,
        limit: 20
      }
    };

    // Capture the query params
    var offset = req.query.offset || defaultSettings.offset;
    var limit = req.query.limit || defaultSettings.limit;
    var tags = req.query.tags;
    var defaultTags = process.env.DEFAULT_TAGS;

    if (tags) {
      tags = defaultTags + ',' + tags;
    } else tags = defaultTags;

    // load the pictures
    pictureDataService.loadPictureData(offset, limit, tags).then(loadPictureDataComplete, loadPictureDataFailed);

    function loadPictureDataComplete(data) {
      return pictureMappingService.mapPicturesResponse(data).then(function (result) {
        console.log('mapped picture data');
        deferred.resolve(result);
      });
    }

    function loadPictureDataFailed(error, data) {
      console.error('Load failed for pictureService.loadPictures.' + error, data);
      deferred.reject(error, data);
    }

    return deferred.promise;
  }
}
