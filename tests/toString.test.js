import toString from '../src/toString';

/* Documentation Notes
 *
 * Label: Error
 * Documentation is incorrect. Check found errors.
 */

/* Found Errors
 *
 * Label: Error
 * Functionality does not match documentation:
 * By documentation, arguments of null or undefined should return empty string.
 * Instead, 'null' and 'undefined' returned.
 * 
 * Severity: "Critical" from scale (Critical, Error, Warning)
 * Objects do not work:
 * No documentation what should be returned.
 */

describe('toString()', () => {
  test('String to string', () => {
    expect(toString('str')).toBe('str')
  })

  test('String with whitespace to string', () => {
    expect(toString('st    ¤%   r     #"    ')).toBe('st    ¤%   r     #"    ')
  })

  test('Object to string', () => {
    expect(toString({a: 2})).toBe('{a, 2}')
  })

  test('Array to string', () => {
    expect(toString([1,2,3])).toBe('1,2,3')
  })

  test('Num to string', () => {
    expect(toString(3.232)).toBe('3.232')
  })

  test('Preserve sign', () => {
    expect(toString(-0)).toBe('-0')
  })

  describe('negative tests', () => {
    test('Null to empty string', () => {
      expect(toString(null)).toBe('')
    })
  
    test('Undefined to empty string', () => {
      expect(toString()).toBe('')
    })
  })
})