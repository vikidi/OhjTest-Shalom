import clamp from '../src/clamp';

/* Documentation Notes
 * 
 * Functioning in case of wrong bounds is not documented. Label: Missing documentation.
 */

/* Found Errors
 * 
 * Always clamps to the lower bound. Label: Critical.
 * 
 * Null and undefined value handling is unknown. Label: Not handled.
 */

describe('clamp()', () => {
  describe('positive tests', () => {
    test('Inside bounds', () => {
      expect(clamp(5, -5, 10)).toBe(5);
    })

    test('Below bounds', () => {
      expect(clamp(-10, -5, 10)).toBe(-5);
    })

    test('Above bounds', () => {
      expect(clamp(15, -5, 10)).toBe(10);
    })

    test('On lower bound', () => {
      expect(clamp(-5, -5, 10)).toBe(-5);
    })

    test('On upper bound', () => {
      expect(clamp(10, -5, 10)).toBe(10);
    })
  })

  describe('negative tests', () => {
    test('Same upper and lower band value', () => {
      expect(clamp(10, -5, -5)).toBe(-5);
    })

    test('Lower band value bigger than upper', () => {
      expect(clamp(5, 10, -5)).toBe(5);
    })

    test('Null as value to clamp', () => {
      expect(clamp(null, -5, 10)).toBe(NaN);
    })

    test('Undefined as value to clamp', () => {
      expect(clamp(undefined, -5, 10)).toBe(NaN);
    })

    test('Null as bound', () => {
      expect(clamp(5, null, 10)).toBe(NaN);
    })

    test('Undefined as bound', () => {
      expect(clamp(5, undefined, 10)).toBe(NaN);
    })
  })
})