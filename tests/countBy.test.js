import countBy from '../src/countBy';

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
 * Does not function properly. Expected values have too low counts by one.
 * Easily reproducible as seen in the tests below.
 */

const array = [
  { 'user': 'barney', 'active': true },
  { 'user': 'betty', 'active': true },
  { 'user': 'fred', 'active': false },
  { 'user': 'sam', 'active': true }
]

const array2 = [
  { 'user': 'barney', 'active': true },
  { 'user': 'betty', 'active': true },
  { 'user': 'sam', 'active': true },
  { 'user': 'sams', 'active': true },
  { 'user': 'samss', 'active': true },
]

 const array3 = [
     { 'user': 'barney', 'active': true },
     { 'user': 'betty', 'active': true },
     { 'user': 'fred', 'active': false }
   ]

describe('countBy()', () => {
  describe('positive tests', () => {
    test('Some true some false', () => {
      expect(countBy(array, value => value.active)).toMatchObject({'true': 3, 'false': 1})
    })

    test('All true', () => {
      expect(countBy(array2, value => value.active)).toMatchObject({'true': 5})
    })

    test('From documentation example', () => {
      expect(countBy(array3, value => value.active)).toMatchObject({ 'true': 2, 'false': 1 })
    })
  })

  // Negative testing not done since this is unusable.
  // describe('negative tests', () => {
  //   test.todo('')
  // })
})