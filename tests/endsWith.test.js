import endsWith from '../src/endsWith';

/* Documentation Notes
 * 
 * Label: Warning
 * Thrown exceptions are not documented for invalid arguments.
 * 
 * Label: Warning
 * Arrays seem to work as well, but are not documented
 */

/* Found Errors
 * 
 * 
 */

describe('endsWith()', () => {
  describe('positive tests', () => {
    test('Should end', () => {
      expect(endsWith('abc', 'c')).toBe(true);
    })

    test('Should end to certain point', () => {
      expect(endsWith('abc', 'a', 1)).toBe(true);
    })

    test('Should end to itself', () => {
      expect(endsWith('abc', 'abc')).toBe(true);
    })

  })

  describe('negative tests', () => {
    test('Wrong argument type', () => {
      expect(endsWith(['asd', 'd'], 'd')).toBe(true);
    })

    test('null arguments', () => {
      expect(() => endsWith(null, null)).toThrow(TypeError);
    })

    test('undefined arguments', () => {
      expect(() => endsWith()).toThrow(TypeError);
    })
  })
})