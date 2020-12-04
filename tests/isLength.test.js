import isLength from '../src/isLength';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isLength()', () => {
  describe('positive tests', () => {
    test('Integer is', () => {
      expect(isLength(2)).toBe(true)
    })

    test('Float is not', () => {
      expect(isLength(2.4)).toBe(false)
    })

    test('Negative is not', () => {
      expect(isLength(-2)).toBe(false)
    })

    test('Zero is', () => {
      expect(isLength(0)).toBe(true)
    })

    test('Max number is not', () => {
      expect(isLength(Number.MAX_VALUE)).toBe(false)
    })

    test('NaN is not', () => {
      expect(isLength(NaN)).toBe(false)
    })
  })

  describe('negative tests', () => {
    test('Null is not', () => {
      expect(isLength(null)).toBe(false)
    })

    test('Undefined is not', () => {
      expect(isLength(undefined)).toBe(false)
    })

    test('Wrong type argument', () => {
      expect(isLength([])).toBe(false)
    })

    test('Wrong type argument', () => {
      expect(isLength(() => {})).toBe(false)
    })
  })
})