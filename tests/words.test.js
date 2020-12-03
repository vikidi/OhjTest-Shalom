import words from '../src/words';

/* Documentation Notes
 *
*  Severity: Warning from scale (Critical, Error, Warning)
 * Exceptions not documented.
 * Handling of incorrect values (null, undefined) not documented.
 */

/* Found Errors
 * None
 */

describe('words()', () => {
  describe('positive tests', () => {
    test('Empty string, no pattern', () => {
      expect(words('')).toMatchObject([])
    })

    test('Empty string, pattern', () => {
      expect(words('', /[^, ]+/g)).toMatchObject([])
    })

    test('String, no pattern', () => {
      expect(words('a,b,c,d,e')).toMatchObject(['a', 'b','c','d','e'])
    })

    test('String, pattern', () => {
      expect(words('a,b,c,d,e', /[^, ]+/g)).toMatchObject(['a', 'b','c','d','e'])
    })


    test('Weird string, pattern', () => {
      expect(words('a & d *, e', /[^, ]+/g)).toMatchObject(['a', '&','d','*','e'])
    })

    test('Werid string, no pattern', () => {
      expect(words('a & d *, e')).toMatchObject(['a', 'd', 'e'])
    })
  })

  describe('negative tests', () => {
    test('No argument', () => {
      expect(() => words()).toThrow(TypeError)
    })

    test('Argument null', () => {
      expect(() => words(null)).toThrow(TypeError)
    })

    test('Wrong argument type', () => {
      expect(() => words(['a'])).toThrow(TypeError)
    })
  })
})