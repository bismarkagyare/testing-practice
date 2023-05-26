const reverseString = require('../code/reverseString');

describe('reverse a string', () => {
  test('returns a reversed string', () => {
    const result = reverseString('hello');
    expect(result).toBe('olleh');
  });

  test('return a single character', () => {
    const result = reverseString('h');
    expect(result).toBe('h');
  });

  test('returns empty string', () => {
    const result = reverseString('');
    expect(result).toBe('');
  });

  test('returns non-string as it is', () => {
    const result = reverseString(123);
    expect(result).toBe(123);
  });
});
