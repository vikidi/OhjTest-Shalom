import at from '../src/at';

/* Documentation Notes
 * 
 * Error situstions not documented
 */

describe('at()', () => {
  const obj = {
    'a': 'a.test',
    'b': 10,
    'c': {
      'a': 'a.a.test',
      'b': ['a.b.test.1', 'a.b.test.2']
    },
    'd': ['d.test.1', 'd.test.2', {
      'a': 'd.test.3.a'
    }]
  }

  describe('positive tests', () => {
    test('one path', () => {
      expect(at(obj, ['a'])).toStrictEqual(['a.test'])
    })

    test('multiple paths', () => {
      expect(at(obj, ['a', 'c.b', 'd[0]'])).toStrictEqual(['a.test', ['a.b.test.1', 'a.b.test.2'], 'd.test.1'])
    })

    test('zero paths', () => {
      expect(at(obj, [])).toStrictEqual([])
    })
  })

  describe('negative tests', () => {
    test('path that does not exist', () => {
      expect(at(obj, ['non_existing'])).toStrictEqual([undefined])
    })

    test('null path', () => {
      expect(at(obj, [null])).toStrictEqual([undefined])
    })

    test('null object', () => {
      expect(at(null, ['test'])).toStrictEqual([undefined])
    })
  })
})