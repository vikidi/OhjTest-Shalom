import toNumber from '../src/toNumber';

/* Documentation Notes
 *
 * Warning:
 * No documentation on arrays, eventhough they do work.
 */

/* Found Errors
 * 
 * None
 */

describe('toNumber()', () => {
  describe('positive tests', () => {
    test('Number to number', () => {
      expect(toNumber(2.5555)).toBe(2.5555)
    })

    test('Number to number', () => {
      expect(toNumber(1)).toBe(1)
    })

    test('Min value number to number', () => {
      expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
    })

    test('Inf to number', () => {
      expect(toNumber(Infinity)).toBe(Infinity)
    })

    test('String float to number', () => {
      expect(toNumber('234.324')).toBe(234.324)
    })

    test('String int to number', () => {
      expect(toNumber('1')).toBe(1)
    })

    test('Array to number', () => {
      expect(toNumber([1])).toBe(1)
    })
  })

  describe('negative tests', () => {
    test('Nan to number', () => {
      expect(toNumber(NaN)).toBe(NaN)
    })

    test('String to number', () => {
      expect(toNumber('asd')).toBe(NaN)
    })

    test('Object to number', () => {
      expect(toNumber({a:2})).toBe(NaN)
    })

    test('Multi value array to number', () => {
      expect(toNumber([1,2,3])).toBe(NaN)
    })
  })
})