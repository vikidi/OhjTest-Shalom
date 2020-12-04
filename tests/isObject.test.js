import isObject from '../src/isObject';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isObject()', () => {
  describe('positive tests', () => {
    test('Object', () => {
      expect(isObject({a:2})).toBe(true)
    })

    test('Array', () => {
      expect(isObject([])).toBe(true)
    })

    test('Function', () => {
      expect(isObject(() => {})).toBe(true)
    })

    test('Number is', () => {
      expect(isObject(new Number(2))).toBe(true)
    })

    test('Non object number is not', () => {
      expect(isObject(2)).toBe(false)
    })

    test('String is', () => {
      expect(isObject(new String("a"))).toBe(true)
    })

    test('Non object string is not', () => {
      expect(isObject("a")).toBe(false)
    })
  })

  describe('negative tests', () => {
    test('Null is not', () => {
      expect(isObject(null)).toBe(false)
    })

    test('Undefined is not', () => {
      expect(isObject()).toBe(false)
    })
  })
})