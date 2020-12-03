import memoize from '../src/memoize';

/* Documentation Notes
 * 
 * 
 */

/* Found Errors
 * 
 * 
 */

let testObject = {a: 1, b: 2, c:3}

function resetTestObject() {
  testObject = {a: 1, b: 2, c:3}
}

describe('memoize()', () => {
  describe('positive tests', () => {
    test('Memoize object', () => {
      resetTestObject();
      expect(() => memoize(testObject).toMatchObject([1,2,3]))
      testObject.a = 2;
      expect(testObject).toMatchObject({a: 2, b: 2, c:3})
      expect(() => memoize(testObject).toMatchObject([1,2,3]))
    })

    test('Modify cache object', () => {
      resetTestObject();
      expect(() => memoize(testObject).toMatchObject([1,2,3]))
      expect(() => memoize(testObject).cache.set(testObject, {a: 2, b: 2, c:3}))
      expect(() => memoize(testObject).toMatchObject([2,2,3]))
    })
  })

  describe('negative tests', () => {
    test.todo('')
  })
})