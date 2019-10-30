import {
  cleanData,
  assignObjectToArrays,
  cleanYelpResponse,
  stringToFloatsArray,
  createStateObject,
  createCheckBoxNames
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
        { category: 'art museums' },
        { category: 'gastropubs' },
        { category: 'bars' },
        { category: 'gift shops' }, 
        { category: 'other' }
      ];

      const expected = [
        [{ category: 'hotels' }],
        [{ category: 'art museums' }],
        [{ category: 'gastropubs' }],
        [{ category: 'bars' }],
        [{ category: 'gift shops' }],
        [{ category: 'other' }]
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
    it('should take in an object with categories assigned to arrays and return an object with the original keys uppercased and joined together', () => {

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

    })

  });


});