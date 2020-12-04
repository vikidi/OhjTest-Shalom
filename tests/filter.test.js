import filter from '../src/filter';

/* Documentation Notes
 * 
 * Label: Warning
 * Thrown exceptions not documented.
 */

/* Found Errors
 *
 * Label: "Error"
 * filtering all elements returns array inside of array ie. [[]] instead of [].
 * 
 * Label: "Error"
 * filtering all elements of null array returns array inside of array ie. [[]] instead of [].
 */


const array = [1,2,3,4,5,6]

describe('filter()', () => {
  describe('positive tests', () => {
    test('filter one element', () => {
      expect(filter(array, (val, ind) => ind != 0)).toMatchObject([2,3,4,5,6]);
    })

    test('filter all elements', () => {
      expect(filter(array, (val, ind) => false)).toMatchObject([]);
    })

    test('filter paired elements', () => {
      expect(filter(array, (val, ind) => val % 2 != 0)).toMatchObject([1,3,5]);
    })

    test('filter nothing', () => {
      expect(filter(array, (val, ind) => true)).toMatchObject(array);
    })
  })

  describe('negative tests', () => {
    test('null as array', () => {
      expect(filter(null, (val, ind) => true)).toMatchObject([]);
    })

    test('No filterer', () => {
      expect(filter(array)).toThrow(TypeError);
    })
  })
})