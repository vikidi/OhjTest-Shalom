import defaultTo from '../src/defaultTo';

/* Documentation Notes
 * 
 * Label: Critical
 * Documentation incorrect! Check found errors.
 * 
 * Label: Warning
 * Documentation missing for return values with no, null or undefined arguments.
 */

/* Found Errors
 * 
 * Label: Critical
 * Given arguments defaultTo(NaN, 10) the function
 * should return first one that is not NaN, ie. 10.
 * However, NaN is returned.
 */

describe('defaultTo()', () => {
  describe('positive tests', () => {
    test('Default to one', () => {
      expect(defaultTo(1)).toBe(1)
    })

    test('Default to first of many', () => {
      expect(defaultTo(1, 10)).toBe(1)
    })

    test('Default to first of not null', () => {
      expect(defaultTo(null, 10)).toBe(10)
    })

    test('Default to first of not undefined', () => {
      expect(defaultTo(undefined, 10)).toBe(10)
    })

    test('Default to first of not NaN', () => {
      expect(defaultTo(NaN, 10)).toBe(10)
    })
  })

  describe('negative tests', () => {
    test('Too many arguments', () => {
      expect(defaultTo(null, undefined, 10)).toBe(undefined)
    })

    test('No default argument', () => {
      expect(defaultTo(null)).toBe(undefined)
    })

    test('No arguments', () => {
      expect(defaultTo(null)).toBe(undefined)
    })
  })
})