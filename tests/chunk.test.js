import chunk from '../src/chunk';

/* Documentation Notes
 * 
 * 
 */

/* Found Errors
 * 
 * Does not work at all. Label: Critical.
 * 
 * If chunk size is null returns empty array. Label: Not handled.
 */

describe('chunk()', () => {
  describe('positive tests', () => {
    test('Normal array with even chunk size', () => {
      expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
    })

    test.skip('Normal array with uneven chunk size', () => {
      expect(chunk([1, 2, 3, 4, 5], 3)).toStrictEqual([[1, 2, 3], [4, 5]]);
    })

    test('Empty array', () => {
      expect(chunk([], 3)).toStrictEqual([]);
    })

    test.skip('Null and undefined values in the array', () => {
      expect(chunk([null, null, undefined, null], 2)).toStrictEqual([[null, null], [undefined, null]]);
    })

    test.skip('Normal array with no chunk size given', () => {
      expect(chunk(['a', 'b', 'c', 'd'])).toStrictEqual(['a', 'b', 'c', 'd']);
    })
  })

  describe('negative tests', () => {
    test('Null as array', () => {
      expect(chunk(null, 3)).toStrictEqual([]);
    })

    test('Undefined as array', () => {
      expect(chunk(undefined, 3)).toStrictEqual([]);
    })

    test('Null as chunk size', () => {
      expect(chunk(['a', 'b', 'c', 'd'], null)).toStrictEqual(['a', 'b', 'c', 'd']);
    })

    test.skip('Undefined as chunk size', () => {
      expect(chunk(['a', 'b', 'c', 'd'], undefined)).toStrictEqual(['a', 'b', 'c', 'd']);
    })
  })
})