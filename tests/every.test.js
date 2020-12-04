import every from '../src/every';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

const array = [1,2,3,4,5,6]
const array2 = ["1",2,3]
const array3 = [true,false,true]

describe('every()', () => {
  describe('positive tests', () => {
    test('Every entry is number of number array', () => {
      expect(every(array, (val) => Number.isInteger(val))).toBe(true);
    })

    test('Every entry is not number of array of different entry types', () => {
      expect(every(array2, (val) => Number.isInteger(val))).toBe(false);
    })
  })

  describe('negative tests', () => {
    test('Entries of null array should be true', () => {
      expect(every(null, (val) => Number.isInteger(val))).toBe(true);
    })

    test('No arguments', () => {
      expect(every()).toBe(true);
    })
  })
})