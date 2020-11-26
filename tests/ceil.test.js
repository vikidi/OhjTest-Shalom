import ceil from '../src/ceil';

/* Documentation Notes
 * 
 * 
 */

/* Found Errors
 * 
 * Null value does not return NaN. Label: Warning.
 */

describe('ceil()', () => {
  describe('positive tests', () => {
    test('Normal rounding with no specific precision', () => {
      expect(ceil(4.006)).toBe(5);
    })

    test('Normal negative rounding with no specific precision', () => {
      expect(ceil(-4.006)).toBe(-4);
    })

    test('Normal rounding with already whole number', () => {
      expect(ceil(5)).toBe(5);
    })

    test('Normal rounding with zero', () => {
      expect(ceil(0)).toBe(0);
    })

    test('Normal rounding with positive precision', () => {
      expect(ceil(4.006, 2)).toBe(4.01);
    })

    test('Normal rounding with positive precision bigger than original precision', () => {
      expect(ceil(4.006, 5)).toBe(4.00600);
    })

    test('Normal rounding with positive precision', () => {
      expect(ceil(4105, -2)).toBe(4200);
    })

    test('Normal rounding with negative precision bigger than original precision', () => {
      expect(ceil(46.006, -5)).toBe(100000);
    })
  })

  describe('negative tests', () => {
    test('Try ceil null value', () => {
      expect(ceil(null)).toBe(NaN);
    })

    test('Try ceil undefined value', () => {
      expect(ceil(undefined)).toBe(NaN);
    })

    test('Null precision', () => {
      expect(ceil(4.006, null)).toBe(5);
    })

    test('Undefined precision', () => {
      expect(ceil(4.006, undefined)).toBe(5);
    })
  })
})