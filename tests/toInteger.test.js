import toInteger from '../src/toInteger';

/* Documentation Notes
 *
 * No documentation on NaN parameter return values, but one can assume it is 0.
 * No documentation on arrays, though they do work.
 */

/* Found Errors
 * None
 */

describe('toInteger()', () => {
  describe('positive tests', () => {
    test('Int to int', () => {
      expect(toInteger(1)).toBe(1);
    })

    test('Float to int', () => {
      expect(toInteger(1.9)).toBe(1);
    })

    test('Min to zero', () => {
      expect(toInteger(Number.MIN_VALUE)).toBe(0);
    })

    test('Max to to Inf', () => {
      expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
    })

    test('String float to int', () => {
      expect(toInteger('3.3')).toBe(3);
    })

    test('String int to int', () => {
      expect(toInteger('3')).toBe(3);
    })

    test('Array to int', () => {
      expect(toInteger([22])).toBe(22);
    })
  })

  describe('negative tests', () => {
    test('Nan to int', () => {
      expect(toInteger(NaN)).toBe(0);
    })

    test('Object to int', () => {
      expect(toInteger({a:22})).toBe(0);
    })
  })
})