'use strict';

//var mockData = require("./mockData.js");

// Get list of pictures
exports.index = index;

function index(req, res) {

  //var payload = mockData.loadMockPictures();
  res.json({"hello": "world!!!"});
}
