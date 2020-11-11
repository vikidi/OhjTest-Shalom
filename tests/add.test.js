import add from '../src/add';

/* Documentation Notes
 * 
 * Exeptions not documented.
 * Handling of incorrect values not documented.
 */

describe('add()', () => {
  describe('positive tests', () => {
    test('Inside bounds, both positive, Int', () => {
      expect(add(1, 2)).toBe(3);
    })

    test('Inside bounds, first negative, Int', () => {
      expect(add(-4, 2)).toBe(-2);
    })

    test('Inside bounds, second negative, Int', () => {
      expect(add(4, -2)).toBe(2);
    })

    test('Inside bounds, both negative, Int', () => {
      expect(add(-1, -2)).toBe(-3);
    })

    test('Inside bounds, first zero, Int', () => {
      expect(add(0, 2)).toBe(2);
    })

    test('Inside bounds, second zero, Int', () => {
      expect(add(1, 0)).toBe(1);
    })

    test('Inside bounds, both zero, Int', () => {
      expect(add(0, 0)).toBe(0);
    })

    // Test floats?
  })

  describe('negative tests', () => {
    test('null as first parameter', () => {
      expect(add(null, 4)).toBe(4);
    })

    test('null as second parameter', () => {
      expect(add(4, null)).toBe(4);
    })

    test('both parameters null', () => {
      expect(add(null, null)).toBe(0);
    })
  })
})