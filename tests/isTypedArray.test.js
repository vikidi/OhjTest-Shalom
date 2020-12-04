import isTypedArray from '../src/isTypedArray';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isTypedArray()', () => {
  describe('positive tests', () => {
    test('Int8Array', () => {
      expect(isTypedArray(new Int8Array)).toBe(true)
    })

    test('Uint8Array', () => {
      expect(isTypedArray(new Uint8Array)).toBe(true)
    })

    test('Uint8ClampedArray', () => {
      expect(isTypedArray(new Uint8ClampedArray)).toBe(true)
    })

    test('Int16Array', () => {
      expect(isTypedArray(new Int16Array)).toBe(true)
    })

    test('Int32Array', () => {
      expect(isTypedArray(new Int32Array)).toBe(true)
    })

    test('Float64Array', () => {
      expect(isTypedArray(new Float64Array)).toBe(true)
    })

    test('BigUint64Array', () => {
      expect(isTypedArray(new BigUint64Array)).toBe(true)
    })
  })

  describe('negative tests', () => {
    test('Normal array', () => {
      expect(isTypedArray([1,2,3])).toBe(false)
    })

    test('Normal empty array', () => {
      expect(isTypedArray([])).toBe(false)
    })

    test('Null', () => {
      expect(isTypedArray(null)).toBe(false)
    })

    test('Wrong type', () => {
      expect(isTypedArray({a:1})).toBe(false)
    })
  })
})