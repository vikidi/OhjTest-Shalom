import isArrayLikeObject from '../src/isArrayLikeObject';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isArrayLikeObject()', () => {
  describe('positive tests', () => {
    test('Array is', () => {
      expect(isArrayLikeObject([])).toBe(true)
    })

    test('Array is 2', () => {
      expect(isArrayLikeObject([1])).toBe(true)
    })
  })

  describe('negative tests', () => {
    test('Null is not', () => {
      expect(isArrayLikeObject(null)).toBe(false)
    })

    test('Undefined is not', () => {
      expect(isArrayLikeObject()).toBe(false)
    })

    test('Non-array is not', () => {
      expect(isArrayLikeObject({a:2})).toBe(false)
    })

    test('Wrong argument type is not', () => {
      expect(isArrayLikeObject(() => {})).toBe(false)
    })
  })
})