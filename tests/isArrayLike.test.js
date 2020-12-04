import isArrayLike from '../src/isArrayLike';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isArrayLike()', () => {
  describe('positive tests', () => {
    test('Array is', () => {
      expect(isArrayLike([])).toBe(true)
    })

    test('Array is 2', () => {
      expect(isArrayLike([2])).toBe(true)
    })

    test('String is', () => {
      expect(isArrayLike("asd")).toBe(true)
    })
  })

  describe('negative tests', () => {
    test('Set is not', () => {
      expect(isArrayLike(new Set)).toBe(false)
    })

    test('Func is not', () => {
      expect(isArrayLike(() => {})).toBe(false)
    })

    test('null is not', () => {
      expect(isArrayLike(null)).toBe(false)
    })

    test('undefined is not', () => {
      expect(isArrayLike()).toBe(false)
    })
  })
})