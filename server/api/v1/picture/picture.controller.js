'use strict';

var pictureDataService = require("./picture.data.service.js")();

// Get list of pictures
exports.index = index;

function index(req, res) {

  pictureDataService.loadPictureData().then(getPicturesComplete, getPicturesFailed);

  function getPicturesComplete(payload) {
    res.json(payload);
  }

  function getPicturesFailed(error, payload) {
    console.log("Error: " + error, payload);
    return res.send(500, 'Internal Server Error');
  }
}
