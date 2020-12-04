import toFinite from '../src/toFinite';

/* Documentation Notes
 * 
 * Label: Warning
 * No documentation on NaN parameter return values, but one can assume it is 0.
 * No documentation on arrays, though they do work.
 */

/* Found Errors
 * 
 * None
 */

describe('toFinite()', () => {
  describe('positive tests', () => {
    test('Int to finite', () => {
      expect(toFinite(1)).toBe(1);
    })

    test('Float to finite', () => {
      expect(toFinite(1.9)).toBe(1.9);
    })

    test('Min to finite', () => {
      expect(toFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
    })

    test('Max to to finite', () => {
      expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
    })

    test('Max to to finite', () => {
      expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE);
    })

    test('String float to finite', () => {
      expect(toFinite('3.3')).toBe(3.3);
    })

    test('String int to finite', () => {
      expect(toFinite('3')).toBe(3);
    })

    test('Array to finite', () => {
      expect(toFinite([22])).toBe(22);
    })
  })

  describe('negative tests', () => {
    test('Nan to finite', () => {
      expect(toFinite(NaN)).toBe(0);
    })

    test('Object to finite', () => {
      expect(toFinite({a:22})).toBe(0);
    })
  })
})