import {
  cleanData,
  assignObjectToArrays,
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

});