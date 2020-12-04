import upperFirst from '../src/upperFirst';

/* Documentation Notes
 *
 * Label: Warning
 * Handling of incorrect values (null, undefined) not documented.
 */

/* Found Errors
 * None
 */

describe('upperFirst()', () => {
  describe('positive tests', () => {
    test('Empty string', () => {
      expect(upperFirst('')).toBe('')
    })

    test('Basic string 1', () => {
      expect(upperFirst('to_upper')).toBe('To_upper')
    })

    test('Basic string 2', () => {
      expect(upperFirst('To_uppeR')).toBe('To_uppeR')
    })

    test('Basic string 3', () => {
      expect(upperFirst('to_uRpeR')).toBe('To_uRpeR')
    })

    test('Basic string 4', () => {
      expect(upperFirst('TO_UPPER')).toBe('TO_UPPER')
    })
  })

  describe('negative tests', () => {
    test('No argument', () => {
      expect(upperFirst()).toBe('')
    })

    test('Null argument', () => {
      expect(upperFirst(null)).toBe('')
    })

    test('Wrong argument type', () => {
      expect(() => upperFirst({a: '2'})).toThrow(TypeError)
    })
  })
})