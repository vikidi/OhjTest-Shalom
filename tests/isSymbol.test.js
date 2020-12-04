import isSymbol from '../src/isSymbol';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isSymbol()', () => {
  describe('positive tests', () => {
    test('Basic symbol', () => {
      expect(isSymbol(Symbol())).toBe(true)
    })

    test('Basic symbol 2', () => {
      expect(isSymbol(Symbol('sym'))).toBe(true)
    })

    test('Non symbol', () => {
      expect(isSymbol('sym')).toBe(false)
    })

    test('Non symbol 2', () => {
      expect(isSymbol(['a'])).toBe(false)
    })
  })

  describe('negative tests', () => {
    test('Null', () => {
      expect(isSymbol(null)).toBe(false)
    })

    test('Undefined', () => {
      expect(isSymbol()).toBe(false)
    })
  })
})