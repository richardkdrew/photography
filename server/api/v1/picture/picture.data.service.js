'use strict';

var q = require("q");

module.exports = pictureDataService;

function pictureDataService() {

  var service = {
    loadPictureData: loadMockPictureDataFromFile
  };

  return service;

  function loadMockPictureDataFromFile(offset, limit, tags) {
    var deferred = q.defer();

    deferred.resolve(loadMockFlickrPictureData(offset, limit));

    return deferred.promise;
  }

  function loadMockFlickrPictureData(offset, limit) {

    var data = {
      "photos": {
        "page": offset, "pages": 0, "perpage": limit, "total": 200,
        "photo": [{
          id: '16414316734',
          owner: '19632847@N00',
          secret: '25428bc7d7',
          server: '8772',
          farm: 9,
          title: '5D3_7127 - Version 2',
          ispublic: 0,
          isfriend: 0,
          isfamily: 0,
          tags: 'wedding bentley',
          url_m: 'https://farm9.staticflickr.com/8772/16414316734_25428bc7d7.jpg',
          height_m: '333',
          width_m: '500'
        },
          {
            id: '16850528669',
            owner: '19632847@N00',
            secret: 'b01e0b57a8',
            server: '8808',
            farm: 9,
            title: '5D3_7114 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8808/16850528669_b01e0b57a8.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16829340237',
            owner: '19632847@N00',
            secret: 'b41b271931',
            server: '8761',
            farm: 9,
            title: '5D3_7111 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8761/16829340237_b41b271931.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '17035888361',
            owner: '19632847@N00',
            secret: 'a8be945b6a',
            server: '8798',
            farm: 9,
            title: '5D3_7108 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8798/17035888361_a8be945b6a.jpg',
            height_m: '500',
            width_m: '333'
          },
          {
            id: '16850525149',
            owner: '19632847@N00',
            secret: 'cb47c87930',
            server: '7698',
            farm: 8,
            title: '5D3_7104 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7698/16850525149_cb47c87930.jpg',
            height_m: '500',
            width_m: '333'
          },
          {
            id: '17036740385',
            owner: '19632847@N00',
            secret: '05495a02ef',
            server: '7727',
            farm: 8,
            title: '5D3_7089 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7727/17036740385_05495a02ef.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '17035294962',
            owner: '19632847@N00',
            secret: '571d9e3145',
            server: '8817',
            farm: 9,
            title: '5D3_7052 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8817/17035294962_571d9e3145.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16850521969',
            owner: '19632847@N00',
            secret: '68dd471c96',
            server: '7671',
            farm: 8,
            title: '5D3_7049 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7671/16850521969_68dd471c96.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16414308144',
            owner: '19632847@N00',
            secret: 'c6ddefb45e',
            server: '7665',
            farm: 8,
            title: '5D3_7031 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7665/16414308144_c6ddefb45e.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '17036736185',
            owner: '19632847@N00',
            secret: 'b9d3f01d24',
            server: '8723',
            farm: 9,
            title: '5D3_7030 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8723/17036736185_b9d3f01d24.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16414303644',
            owner: '19632847@N00',
            secret: '1ae24c5f90',
            server: '8726',
            farm: 9,
            title: '5D3_7018 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8726/16414303644_1ae24c5f90.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16848943308',
            owner: '19632847@N00',
            secret: '4a8f325bbd',
            server: '7614',
            farm: 8,
            title: '5D3_7007 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7614/16848943308_4a8f325bbd.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16829327347',
            owner: '19632847@N00',
            secret: '7571572395',
            server: '7613',
            farm: 8,
            title: '5D3_6986 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7613/16829327347_7571572395.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '17010733616',
            owner: '19632847@N00',
            secret: '76306a1f25',
            server: '7654',
            farm: 8,
            title: '5D3_6892 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7654/17010733616_76306a1f25.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16848939898',
            owner: '19632847@N00',
            secret: '6b5e3d783c',
            server: '8714',
            farm: 9,
            title: '5D3_6847 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8714/16848939898_6b5e3d783c.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16848938898',
            owner: '19632847@N00',
            secret: 'de2a69b1b7',
            server: '8784',
            farm: 9,
            title: '5D3_6795 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8784/16848938898_de2a69b1b7.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '17035872131',
            owner: '19632847@N00',
            secret: '5cecf7227f',
            server: '7640',
            farm: 8,
            title: '5D3_6792 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7640/17035872131_5cecf7227f.jpg',
            height_m: '500',
            width_m: '333'
          },
          {
            id: '16850508359',
            owner: '19632847@N00',
            secret: '6815ac4bb4',
            server: '8771',
            farm: 9,
            title: '5D3_6791 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8771/16850508359_6815ac4bb4.jpg',
            height_m: '500',
            width_m: '333'
          },
          {
            id: '16416573453',
            owner: '19632847@N00',
            secret: 'afba52330d',
            server: '7590',
            farm: 8,
            title: '5D3_6787 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm8.staticflickr.com/7590/16416573453_afba52330d.jpg',
            height_m: '333',
            width_m: '500'
          },
          {
            id: '16850506249',
            owner: '19632847@N00',
            secret: '9afdc1b207',
            server: '8716',
            farm: 9,
            title: '5D3_6738 - Version 2',
            ispublic: 0,
            isfriend: 0,
            isfamily: 0,
            tags: 'wedding bentley',
            url_m: 'https://farm9.staticflickr.com/8716/16850506249_9afdc1b207.jpg',
            height_m: '500',
            width_m: '333'
          }]
      }, "stat": "ok"
    };

    return data;
  }
}
