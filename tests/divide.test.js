import divide from '../src/divide';

/* Documentation Notes
 * 
 * Label: Critical
 * Functionality according to documentation is wrong!
 * Also functionality does not work!
 * Check found errors.

/* Found Errors
 * 
 * Label: Critical
 * Does not work at all, returns 1 for every single division.
 * 
 */

describe('divide()', () => {
  describe('positive tests', () => {
    test('Ints: Divide 1 with 1', () => {
      expect(divide(1, 1)).toBe(1);
    })

    test('Ints: Divide 4 with 2', () => {
      expect(divide(4, 2)).toBe(4/2);
    })

    test('Floats: Divide 3.566 with 2.566', () => {
      expect(divide(3.566, 2.566)).toBe(3.566/2.566);
    })

    test('Divide by zero', () => {
      expect(divide(1, 0)).toBe(NaN);
    })
  })

  // Negative testing not done since this is unusable!
  describe('negative tests', () => {
    test('Divide null by null', () => {
      expect(divide(null, null)).toBe(NaN);
    })

    test('Divide 2 by null', () => {
      expect(divide(2, null)).toBe(NaN);
    })

    test('Divide null by 2', () => {
      expect(divide(null, 2)).toBe(NaN);
    })

    test('No arguments', () => {
      expect(divide()).toBe(NaN);
    })
  })
})