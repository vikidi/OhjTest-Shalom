import isEmpty from '../src/isEmpty';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isEmpty()', () => {
  describe('positive tests', () => {
    test('Empty array', () => {
      expect(isEmpty([])).toBe(true)
    })

    test('Non-empty array is not empty', () => {
      expect(isEmpty([2])).toBe(false)
    })

    test('Object', () => {
      expect(isEmpty({a: 2})).toBe(false)
    })

    test('Empty set', () => {
      expect(isEmpty(new Set)).toBe(true)
    })

    test('Non-empty set is not empty', () => {
      expect(isEmpty(new Set().add(1))).toBe(false)
    })
  })

  describe('negative tests', () => {
    test('Null is empty', () => {
      expect(isEmpty(null)).toBe(true)
    })

    test('Undefined is empty', () => {
      expect(isEmpty()).toBe(true)
    })

    test('Wrong argument type', () => {
      expect(isEmpty(() => {})).toBe(true)
    })
  })
})