import isArguments from '../src/isArguments';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 * 
 * None
 */

let a = 1;
let b = 2;

describe('isArguments()', () => {
  describe('positive tests', () => {
    test('Arguments', () => {
      expect(isArguments(function() { return arguments }())).toBe(true);
    })

    test('Arguments 2', () => {
      expect(isArguments(function(a,b) { return arguments }())).toBe(true);
    })

    test('Arguments 3', () => {
      expect(isArguments(arguments)).toBe(true);
    })

    test('Non argument', () => {
      expect(isArguments(2)).toBe(false);
    })
  })

  describe('negative tests', () => {
    test('Null is not', () => {
      expect(isArguments(null)).toBe(false);
    })

    test('Undefined is not', () => {
      expect(isArguments()).toBe(false);
    })
  })
})