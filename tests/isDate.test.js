import isDate from '../src/isDate';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isDate()', () => {
  describe('positive tests', () => {
    test('Date object is', () => {
      expect(isDate(new Date)).toBe(true)
    })

    test('Date as str is not', () => {
      expect(isDate('Mon April 23 2012')).toBe(false)
    })
  })

  describe('negative tests', () => {
    test('Null is not', () => {
      expect(isDate(null)).toBe(false)
    })

    test('Undefined is not', () => {
      expect(isDate()).toBe(false)
    })

    test('Non Date type is not', () => {
      expect(isDate([])).toBe(false)
    })

    test('Non Date type is not 2', () => {
      expect(isDate(() => {})).toBe(false)
    })
  })
})