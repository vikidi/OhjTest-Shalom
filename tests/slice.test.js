import slice from '../src/slice';

/* Documentation Notes
 *
 * Severity: "Warning" from scale (Critical, Error, Warning) 
 * No documentation on wrong argument type return values.
 * 
 */

/* Found Errors
 * 
 * None
 */

const testArray = [1,2,3,4,5,6]

describe('slice()', () => {
  describe('positive tests', () => {
    test('No slice', () => {
      expect(slice(testArray)).toMatchObject(testArray);
    })

    test('First element', () => {
      expect(slice(testArray, 0, 1)).toMatchObject([1]);
    })

    test('Last element', () => {
      expect(slice(testArray, testArray.length - 1, testArray.length)).toMatchObject([6]);
    })

    test('Sub array', () => {
      expect(slice(testArray, 2, 4)).toMatchObject([3,4]);
    })

    test('Slice same indexes', () => {
      expect(slice(testArray, 1, 1)).toMatchObject([]);
    })
  })

  describe('negative tests', () => {
    test('Null argument', () => {
      expect(slice(null)).toMatchObject([])
    })

    test('Undefined argument', () => {
      expect(slice()).toMatchObject([])
    })

    test('Wrong type argument', () => {
      expect(slice({a:2})).toMatchObject([])
    })

    test('Slice indexes wrong', () => {
      expect(slice(testArray, -1 ,2)).toMatchObject([])
    })

    test('Slice indexes wrong 2', () => {
      expect(slice(testArray, 3 ,2)).toMatchObject([])
    })
  })
})