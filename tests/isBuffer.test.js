import isBuffer from '../src/isBuffer';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isBuffer()', () => {
  describe('positive tests', () => {
    test('Buffer object is', () => {
      expect(isBuffer(new Buffer.alloc(2))).toBe(true)
    })

    test('Uint8Array is not', () => {
      expect(isBuffer(new Uint8Array(2))).toBe(false)
    })

    test('Array is not', () => {
      expect(isBuffer([])).toBe(false)
    })
  })

  describe('negative tests', () => {
    test('Null is not', () => {
      expect(isBuffer(null)).toBe(false)
    })

    test('Undefined is not', () => {
      expect(isBuffer(null)).toBe(false)
    })

    test('Wrong argument type is not', () => {
      expect(isBuffer(() => {})).toBe(false)
    })
  })
})