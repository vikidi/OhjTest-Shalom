import drop from '../src/drop';

/* Documentation Notes
 * 
 * Label: Warning
 * Strings do work as well, but are not documented.
 */

/* Found Errors
 * 
 * None
 */

const array = [1,2,3,4,5,6,7,8];

describe('drop()', () => {
  describe('positive tests', () => {
    test('Drop first', () => {
      expect(drop(array)).toMatchObject([2,3,4,5,6,7,8]);
    })

    test('Drop first with argument', () => {
      expect(drop(array, 1)).toMatchObject([2,3,4,5,6,7,8]);
    })

    test('Drop first 4 in the middle', () => {
      expect(drop(array, 4)).toMatchObject([5,6,7,8]);
    })

    test('Drop zero', () => {
      expect(drop(array, 0)).toMatchObject(array);
    })

    test('Drop all', () => {
      expect(drop(array, 8)).toMatchObject([]);
    })

    test('Drop all over indexing', () => {
      expect(drop(array, 10)).toMatchObject([]);
    })
  })

  describe('negative tests', () => {
    test('Drop from null array', () => {
      expect(drop(null)).toMatchObject([]);
    })

    test('Drop from wrong but okay type', () => {
      expect(drop("null")).toMatchObject(["u", "l", "l"]);
    })

    test('Drop from wrong type', () => {
      expect(drop({a: 2})).toMatchObject([]);
    })

    test('Drop from wrong type', () => {
      expect(drop(() => {})).toMatchObject([]);
    })
  })
})