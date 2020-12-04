import get from '../src/get';

/* Documentation Notes
 * 
 * None
 */

/* Found Errors
 *
 * Label: Critical
 * Getting the object it self returns undefined.
 */

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('get()', () => {
  describe('positive tests', () => {
    test('Get', () => {
      expect(get(object, 'a')).toMatchObject([{ 'b': { 'c': 3 } }]);
    })

    test('Get deeper', () => {
      expect(get(object, 'a[0]')).toMatchObject({ 'b': { 'c': 3 } });
    })

    test('Get deeper still', () => {
      expect(get(object, 'a[0].b.c')).toBe(3);
    })

    test('Get default value for incorrect path', () => {
      expect(get(object, 'nopath', 'def')).toBe('def');
    })

    test('Get the object it self', () => {
      expect(get(object)).toMatchObject(object);
    })
  })

  describe('negative tests', () => {
    test('Null object', () => {
      expect(get(null, 'a[0].b.c')).toBe(undefined);
    })

    test('Undefined object', () => {
      expect(get()).toBe(undefined);
    })
  })
})