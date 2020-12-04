import isBoolean from '../src/isBoolean';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isBoolean()', () => {
  describe('positive tests', () => {
    test('true is', () => {
      expect(isBoolean(true)).toBe(true)
    })

    test('expression is', () => {
      expect(isBoolean(1 === 1)).toBe(true)
    })

    test('Boolean is', () => {
      expect(isBoolean(new Boolean())).toBe(true)
    })
  })

  describe('negative tests', () => {
    test('null is not', () => {
      expect(isBoolean(null)).toBe(false)
    })

    test('undefined is not', () => {
      expect(isBoolean()).toBe(false)
    })

    test('Wrong argument type is not', () => {
      expect(isBoolean(() => {})).toBe(false)
    })

    test('1 is not primitive so it should be false', () => {
      expect(isBoolean(1)).toBe(false)
    })

    test('0 is not primitive so it should be false', () => {
      expect(isBoolean(0)).toBe(false)
    })
  })
})