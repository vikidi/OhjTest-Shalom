import difference from '../src/difference';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

 const array1 = [1,2,3,5]
 const array2 = [2,3,4]

describe('difference()', () => {
  describe('positive tests', () => {
    test('No difference', () => {
      expect(difference(array1, array1)).toMatchObject([]);
    })

    test('Difference', () => {
      expect(difference(array1, array2)).toMatchObject([1, 5]);
    })

    test('Difference 2', () => {
      expect(difference(array2, array1)).toMatchObject([4]);
    })

    test('Difference to empty', () => {
      expect(difference(array1, [])).toMatchObject(array1);
    })

    test('Difference empty to some array', () => {
      expect(difference([])).toMatchObject([]);
    })
  })

  describe('negative tests', () => {
    test('Difference null to some array', () => {
      expect(difference(null, array1)).toMatchObject([]);
    })

    test('Difference some array to null array', () => {
      expect(difference(array1, null)).toMatchObject(array1);
    })

    test('Difference null to null', () => {
      expect(difference(null, null)).toMatchObject([]);
    })

    test('Difference to nothing', () => {
      expect(difference(array1)).toMatchObject(array1);
    })

    test('No arguments', () => {
      expect(difference()).toMatchObject([]);
    })
  })
})