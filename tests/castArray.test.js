import castArray from '../src/castArray';

/* Documentation Notes
 * 
 * 
 */

/* Found Errors
 *
 * Casts array to another array resulting in "double array". Should not. Label: Error
 * 
 * Casting empty parameter list adds "undefined" to the array. Label: Incorrectly handled.
 */

describe('castArray()', () => {
  describe('positive tests', () => {
    test('Cast number', () => {
      const num = 1;
      expect(castArray(num)).toStrictEqual([num])
    })

    test('Cast string', () => {
      const string = 'abc'
      expect(castArray(string)).toStrictEqual([string])
    })

    test('Cast array', () => {
      const arr = [1, 'abc']
      expect(castArray(arr)).toStrictEqual([arr])
    })

    test('Cast object', () => {
      const obj = {a: 1, b: 'abc'}
      expect(castArray(obj)).toStrictEqual([obj])
    })
  })

  describe('negative tests', () => {
    test('Cast empty param list', () => {
      expect(castArray()).toStrictEqual([])
    })

    test('Cast null', () => {
      expect(castArray(null)).toStrictEqual([null])
    })

    test('Cast undefined', () => {
      expect(castArray(undefined)).toStrictEqual([undefined])
    })
  })
})