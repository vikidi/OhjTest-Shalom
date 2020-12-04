import eq from '../src/eq';

/* Documentation Notes
 * 
 * label: Error
 * Documentation incorrect! Check found errors.
 */

/* Found Errors
 * 
 * label: Error
 * By documentation eq('a', Object('a')) should be false,
 * but it translates to true.
 */

const object = { 'a': 1 }
const other = { 'a': 1 }

describe('eq()', () => {
  test('Are same', () => {
    expect(eq(object, object)).toBe(true);
  })

  test('Are different', () => {
    expect(eq(object, other)).toBe(false);
  })

  test('Are similar, but different', () => {
    expect(eq('a', Object('a'))).toBe(false);
  })

  describe('negative tests', () => {
    test('null and null similar', () => {
      expect(eq(null, null)).toBe(true);
    })

    test('no arguments', () => {
      expect(eq()).toBe(true);
    })
  })
})