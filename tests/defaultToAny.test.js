import defaultToAny from '../src/defaultToAny';

/* Documentation Notes
 * 
 * Label: Critical
 * Documentation incorrect! Check found errors.
 * 
 * Label: Warning
 * Documentation missing for return values with no arguments.
 */

/* Found Errors
 * 
 * Label: Critical
 * Given arguments defaultToAny(null,undefined,NaN,1) the function
 * should return first one that is not one of null,undefined or NaN.
 * However, NaN is returned.
 */

describe('defaultToAny()', () => {
  describe('positive tests', () => {
    test('Default to one', () => {
      expect(defaultToAny(1)).toBe(1)
    })

    test('Default to first, many entries', () => {
      expect(defaultToAny(1,2,3,4)).toBe(1)
    })

    test('Default to first defined', () => {
      expect(defaultToAny(null, undefined, NaN, 1)).toBe(1)
    })
    
    test('Default to first defined 2', () => {
      expect(defaultToAny(null, undefined, 'a', 1)).toBe('a')
    })
    
    test('Default to null', () => {
      expect(defaultToAny(null)).toBe(null)
    })

    test('Default to null', () => {
      expect(defaultToAny(undefined, null)).toBe(null)
    })

    test('Default to NaN', () => {
      expect(defaultToAny(undefined, null, NaN)).toBe(NaN)
    })
  })

  describe('negative tests', () => {
    test('No arguments', () => {
      expect(defaultToAny()).toBe(undefined)
    })
  })
})