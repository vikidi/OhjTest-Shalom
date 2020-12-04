import map from '../src/map';

/* Documentation Notes
 * 
 * Severity: "Warning" from scale (Critical, Error, Warning)
 * Return values for unsupported types not documented,
 * even though they are handled in some cases.
 * 
 * Severity: "Warning"
 * Thrown exceptions not documented.
 */

/* Found Errors
 * 
 * None
 */

let testArray = [1,2,3]

function square(n) {
  return n * n
}

function cube(n) {
  return n*n*n
}

describe('map()', () => {
  describe('positive tests', () => {
    test('map elements', () => {
      expect(map(testArray, square)).toMatchObject([1,4,9])
    })

    test('map elements', () => {
      expect(map(testArray, cube)).toMatchObject([1,8,27])
    })

    test('map empty array', () => {
      expect(map([], square)).toMatchObject([])
    })
  })

  describe('negative tests', () => {

    test('map null array', () => {
      expect(map(null, square)).toMatchObject([])
    })

    test('wrong type argument', () => {
      expect(map({a:2}, square)).toMatchObject([undefined])
    })

    test('wrong type argument 2', () => {
      expect(() => map(testArray, [])).toThrow(TypeError)
    })

    test('wrong type argument 3', () => {
      expect(() => map(testArray, null)).toThrow(TypeError)
    })
  })
})