var mockData = (function() {
  return {
    getMockApiResponse: getMockApiResponse,
    getMockPictures: getMockPictures
  };

  function getMockApiResponse() {
    return {
      meta: {
        paging: {limit: 3, offset: 0, total: 52},
        result: {status: 'ok'}
      },
      pictures: getMockPictures()
    }
  }

  function getMockPictures() {
    return [{
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
      }];
  }
})();
