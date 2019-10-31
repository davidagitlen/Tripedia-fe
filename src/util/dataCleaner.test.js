import {
  cleanData,
  assignObjectToArrays,
  cleanYelpResponse,
  stringToFloatsArray,
  createStateObject,
  createCheckBoxNames,
  objectifyArray
} from './dataCleaner';

describe('dataCleaner', () => {

  describe('cleanData', () => {
    it('removes empty arrays from data passed into it', () => {
      const mockRawData = {
        attractions: [
          [{name: 'testOne', id: 1}], 
          [{name: 'testTwo', id: 2}], 
          []
        ]
      };
      const expected = [
          [{ name: 'testOne', id: 1 }],
          [{ name: 'testTwo', id: 2 }]
        ];
      expect(cleanData(mockRawData)).toEqual(expected)
    });

    it('removes null objects from data passed into it', () => {
      const mockRawData = {
        attractions: [
          [{ name: 'testOne', id: 1 }, null],
          [{ name: 'testTwo', id: 2 }, null]
        ]
      };
      const expected = [
        [{ name: 'testOne', id: 1 }],
        [{ name: 'testTwo', id: 2 }]
      ];

      expect(cleanData(mockRawData)).toEqual(expected)
    });
  });

  describe('assignObjectToArray', () => {

    it('should assign objects from an array to specific arrays based on a switch statement and return an array of arrays', () => {

      const mockRawData = [
        { category: 'hotels' },
        { category: 'bed & breakfast' },
        { category: 'guest houses' },
        { category: 'resorts' },
        { category: 'art museums' },
        { category: 'haunted houses' },
        { category: 'parks' },
        { category: 'gastropubs' },
        { category: 'sandwiches' },
        { category: 'fast food' },
        { category: 'chocolatiers & shops' },
        { category: 'bars' },
        { category: 'lounges' },
        { category: 'dive bars' },
        { category: 'distilleries' },
        { category: 'gift shops' }, 
        { category: 'gyms' },
        { category: 'outdoor gear' },
        { category: 'hunting & fishing supplies' },
        { category: 'other' },
        { category: 'random'}
      ];

      const expected = [
        [ 
          { category: 'hotels', svg: 'accommodations' },
          { category: 'bed & breakfast', svg: 'accommodations' },
          { category: 'guest houses', svg: 'accommodations' },
          { category: 'resorts', svg: 'accommodations' }
        ],
        [
          { category: 'art museums', svg: 'attractions' },
          { category: 'haunted houses', svg: 'attractions' },
          { category: 'parks', svg: 'attractions' }
        ],
        [
          { category: 'gastropubs', svg: 'food' },
          { category: 'sandwiches', svg: 'food' },
          { category: 'fast food', svg: 'food' },
          { category: 'chocolatiers & shops', svg: 'food' }
        ],
        [
          { category: 'bars', svg: 'drinks' },
          { category: 'lounges', svg: 'drinks' },
          { category: 'dive bars', svg: 'drinks' },
          { category: 'distilleries', svg: 'drinks' }
        ],
        [
          { category: 'gift shops', svg: 'services' },
          { category: 'gyms', svg: 'services' },
          { category: 'outdoor gear', svg: 'services' },
          { category: 'hunting & fishing supplies', svg: 'services' }
        ],
        [
          { category: 'other' },
          { category: 'random'}
        ]
      ];

      expect(assignObjectToArrays(mockRawData)).toEqual(expected);
    });
  });

  describe('cleanYelpResponse', () => {

    it('should take in a yelp response object and format it to contain only specifically formatted categories', () => {

      const mockYelpResponse = {
        id: "yRl2-nI6P15QASVda1qqwA",
        alias: "farmhouse-thai-eatery-lakewood",
        name: "Farmhouse Thai Eatery",
        image_url:
          "https://s3-media2.fl.yelpcdn.com/bphoto/LptPoRUPkDFObRHm5L1xuQ/o.jpg",
        is_closed: false,
        url:
          "https://www.yelp.com/biz/farmhouse-thai-eatery-lakewood?adjust_creative=pVrRdyk-0QZdpoY-HSxTFg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pVrRdyk-0QZdpoY-HSxTFg",
        review_count: 117,
        categories: [{ alias: "thai", title: "Thai" }],
        rating: 4.5,
        coordinates: { latitude: 39.71698, longitude: -105.08001 },
        transactions: [],
        price: "$$",
        location: {
          address1: "98 Wadsworth Blvd",
          address2: "Ste 117",
          address3: null,
          city: "Lakewood",
          zip_code: "80226",
          country: "US",
          state: "CO",
          display_address: ["98 Wadsworth Blvd", "Ste 117", "Lakewood, CO 80226"]
        },
        phone: "+13032372475",
        display_phone: "(303) 237-2475",
        distance: 1990.1371756025123
      };

      const expected = {
        name: "Farmhouse Thai Eatery",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/LptPoRUPkDFObRHm5L1xuQ/o.jpg",
        url: "https://www.yelp.com/biz/farmhouse-thai-eatery-lakewood?adjust_creative=pVrRdyk-0QZdpoY-HSxTFg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=pVrRdyk-0QZdpoY-HSxTFg",
        rating: 4.5,
        latitude: 39.71698,
        longitude: -105.08001,
        address: ["98 Wadsworth Blvd", "Ste 117", "Lakewood, CO 80226"],
        phone: "(303) 237-2475",
        category: "thai"
      };

      expect(cleanYelpResponse(mockYelpResponse)).toEqual(expected);
    });
  });

  describe('stringToFloatsArray', () => {
    it('should take in a string that looks like an object and return an array of two floats', () => {

      const mockRawString = "{ lat: 35.909, lng: -108.108}";
      const expected = [35.909, -108.108];

      expect(stringToFloatsArray(mockRawString)).toEqual(expected);
    });
  });

  describe('createStateObject', () => {
    it('should take in an object with keys assigned to arrays and return an object with the original keys uppercased and joined together', () => {

      const mockFormObject = {
        'test one': ['test'],
        'test two': ['test'],
        'test three': ['test']
      };

      const expected = {
        TestOne: false,
        TestTwo: false,
        TestThree: false
      }

      expect(createStateObject(mockFormObject)).toEqual(expected)
    });
  });

  describe('createCheckBoxNames', () => {
    it('should take in an object with keys assigned to arrays and return an array with each index holding the original keys as strings with each word uppercased and separated by a space', () => {
      const mockFormObject = {
        'test one': ['test'],
        'test two': ['test'],
        'test three': ['test']
      };

      const expected = [
        'Test One',
        'Test Two',
        'Test Three'
      ];

      expect(createCheckBoxNames(mockFormObject)).toEqual(expected);
    });
  });

  describe('objectifyArray', () => {
    it('should take in an array of objects and return an object with keys matching each unique object category assigned to arrays of those objects', () => {

      const mockArray = [
        { id: 1, category: "One"  },
        { id: 2, category: "One" },
        { id: 3, category: "Two" },
        { id: 4, category: "Two" },
        { id: 5, category: "Three" },
        { id: 6, category: "Three" },
        { id: 7, category: "Four" },
        { id: 8, category: "Four" },
        { id: 9, category: "Five" }, 
        { id: 10, category: "Five" } 
      ];

      const expected = {
        One: [{ id: 1, category: "One" },
          { id: 2, category: "One" }],
        Two: [{ id: 3, category: "Two" },
        { id: 4, category: "Two" }],
        Three: [{ id: 5, category: "Three" },
          { id: 6, category: "Three" }],
        Four: [{ id: 7, category: "Four" },
          { id: 8, category: "Four" }],
        Five: [{ id: 9, category: "Five" },
          { id: 10, category: "Five" }]
      };

      expect(objectifyArray(mockArray)).toEqual(expected);
    });
  });


});