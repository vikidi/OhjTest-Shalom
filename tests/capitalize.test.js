import capitalize from '../src/capitalize';

/* Documentation Notes
 * 
 * 
 */

/* Found Errors
 *
 * Spaces wont get removed, therefor does not capitalize the word. Label: Error.
 * 
 * Strange behaviour with null input. Label: Incorrectly handled 
 */

describe('capitalize()', () => {
  describe('positive tests', () => {
    test('one word', () => {
      expect(capitalize('test')).toBe('Test')
    })

    test.skip('spaces around word', () => {
      expect(capitalize('    test    ')).toBe('Test')
    })

    test('multiple word', () => {
      expect(capitalize('test case given.')).toBe('Test case given.')
    })

    test('random numbers', () => {
      expect(capitalize('test55 case')).toBe('Test55 case')
    })

    test('numbers as first char', () => {
      expect(capitalize('55test')).toBe('55test')
    })
  })

  describe('negative tests', () => {
    test('empty string', () => {
      expect(capitalize('')).toBe('')
    })

    test.skip('null as input', () => {
      expect(capitalize(null)).toBe('')
    })
  })
})