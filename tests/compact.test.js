import compact from '../src/compact';

/* Documentation Notes
 * 
 * Label: Critical
 * Functionality according to documentation is wrong!
 * Also functionality does not work!
 * Check found errors.
 */

/* Found Errors
 * 
 * Label: Critical
 * Does not function properly. Expected values have always first entry removed.
 * Easily reproducible as seen in the tests below.
 */

const array = [true, false, 1, null, 2, 0, "", 3, undefined, 4, NaN]
const array2 = [1, null, 2, 0, "", 3, undefined, 4, NaN]
const array3 = [1, 2, 3, 4, false]

describe('compact()', () => {
  describe('positive tests', () => {
    test('Compact big', () => {
      expect(compact(array)).toMatchObject([true,1,2,3,4])
    })

    test('Compact smaller', () => {
      expect(compact(array2)).toMatchObject([1,2,3,4])
    })

    test('Compact even smaller', () => {
      expect(compact(array3)).toMatchObject([1,2,3,4])
    })
  })

  // Not testing negatives since this unusable.
  // describe('negative tests', () => {
  //   test.todo('')
  // })
})