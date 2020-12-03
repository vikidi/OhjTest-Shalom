import reduce from '../src/reduce';

/* Documentation Notes
 * 
 * Warning:
 * Documentation missing for return values of empty or null arrays/objects.
 */

/* Found Errors
 * 
 * None
 */

const testArray = [1,2,3]
const testObject = {a: 1, b: 2, c:3}

describe('reduce()', () => {
    test('reduce array accumulator', () => {
      expect(reduce(testArray, (prod, n) => prod * n, 1)).toBe(6);
    })

    test('reduce array no accumulator', () => {
      expect(reduce(testArray, (sum, n) => sum + n)).toBe(6);
    })

    test('reduce object accumulator', () => {
      expect(reduce(testObject, (prod, val, key) => prod * val, 1)).toBe(6);
    })

    test('reduce array no accumulator', () => {
      expect(reduce(testObject, (sum, val, key) => sum + val)).toBe(6);
    })

    test('empty array accumulator', () => {
      expect(reduce([], (sum, val, ) => sum + val, 6)).toBe(6);
    })

  describe('negative tests', () => {
    test('reduce empty array no accumulator', () => {
      expect(reduce([], (sum, val) => sum + val)).toBe(undefined);
    })

    test('reduce empty array accumulator', () => {
      expect(reduce([], (sum, val) => sum + val, 5)).toBe(5);
    })

    test('reduce empty object no accumulator', () => {
      expect(reduce({}, (sum, val, key) => sum + val)).toBe(undefined);
    })

    test('reduce empty object accumulator', () => {
      expect(reduce({}, (sum, val, key) => sum + val, 5)).toBe(5);
    })

    test('reduce null object', () => {
      expect(reduce(null, (sum, val) => sum + val, 5)).toBe(5);
    })
  })
})