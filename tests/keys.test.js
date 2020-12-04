import keys from '../src/keys';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

let testObject = { a:1, b:2, c:3 }

describe('keys()', () => {
  describe('positive tests', () => {
    test('keys of object', () => {
      expect(keys(testObject)).toMatchObject(['a', 'b', 'c'])
    })

    test('keys of string', () => {
      expect(keys("str")).toMatchObject(['0', '1', '2'])
    })
  })

  describe('negative tests', () => {
    test('keys of null', () => {
      expect(keys(null)).toMatchObject([])
    })

    test('keys of undefined', () => {
      expect(keys()).toMatchObject([])
    })

    test('keys of wrong type ie. array', () => {
      expect(keys([1,2,3])).toMatchObject(['0', '1', '2'])
    })

    test('keys of wrong type ie. int', () => {
      expect(keys(1)).toMatchObject([])
    })
  })
})