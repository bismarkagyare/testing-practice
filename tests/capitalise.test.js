const capitalise = require('../code/capitalise');

describe('capitalise', () => {
  test('should capitalise first letter', () => {
    const result = capitalise('hello');
    expect(result).toBe('Hello');
  });

  test('should return empty string', () => {
    const result = capitalise('');
    expect(result).toBe('');
  });

  test('should return non-string input as it is', () => {
    const result = capitalise(123);
    expect(result).toEqual(123);
  });

  test('should capitalise the first letter of a sentence', () => {
    const result = capitalise('this is a sentence');
    expect(result).toBe('This is a sentence');
  });
});
