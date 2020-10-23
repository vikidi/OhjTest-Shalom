import add from '../src/add';

describe('add()', () => {
  test('positive test, inside bounds', () => {
    expect(add(1, 2)).toBe(3);
  })
})