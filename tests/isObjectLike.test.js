import isObjectLike from '../src/isObjectLike';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

describe('isObjectLike()', () => {
  describe('positive tests', () => {
    test('Object is like', () => {
      expect(isObjectLike({a:2})).toBe(true)
    })

    test('Array is like', () => {
      expect(isObjectLike([])).toBe(true)
    })

    test('Func is not like', () => {
      expect(isObjectLike(() => {})).toBe(false)
    })

    test('Number is not like', () => {
      expect(isObjectLike(2)).toBe(false)
    })
  })

  describe('negative tests', () => {
    test('Null is not like', () => {
      expect(isObjectLike(null)).toBe(false)
    })

    test('undefined is not like', () => {
      expect(isObjectLike()).toBe(false)
    })
  })
})