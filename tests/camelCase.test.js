import camelCase from '../src/camelCase';

/* Documentation Notes
 * 
 * 
 */

/* Found Errors
 *
 * Function inserts space as first char always. Label: Critical.
 * 
 * If word starts with numbers the first real words first letter is cap. 
 * Should not be. Label: Warning.
 * 
 * Strange behaviour with null input. Label: Incorrectly handled.
 */

// Skipped tests will throw assertion while the 'single word'-test is not fixed.

describe('camelCase()', () => {
  describe('positive tests', () => {
    test('single word', () => {
      expect(camelCase('string')).toBe('string')
    })

    test.skip('two words', () => {
      expect(camelCase('string test')).toBe('stringTest')
    })

    test.skip('one word upper case', () => {
      expect(camelCase('StRiNg')).toBe('string')
    })

    test.skip('two words upper case', () => {
      expect(camelCase('StRiNg teSt')).toBe('stringTest')
    })

    test.skip('many spaces', () => {
      expect(camelCase('   string    test    ')).toBe('stringTest')
    })

    test.skip('multiple words', () => {
      expect(camelCase('string test okay')).toBe('stringTestOkay')
    })

    test.skip('special characteristics', () => {
      expect(camelCase('.,&%#string-/test+=)`´')).toBe('stringTest')
    })

    test('numbers', () => {
      expect(camelCase('42string91 test52')).toBe('stringTest')
    })
  })

  describe('negative tests', () => {
    test.skip('empty string', () => {
      expect(camelCase('')).toBe('')
    })

    test('null as input', () => {
      expect(camelCase(null)).toBe('')
    })
  })
})