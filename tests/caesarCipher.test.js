const caesarCipher = require('../code/caesarCipher');

describe('caesarCipher', () => {
  test('should shift each character by the specified factor', () => {
    // Test with a positive shift factor
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
    expect(caesarCipher('zZ', 1)).toBe('aA');

    // Test with a negative shift factor
    expect(caesarCipher('bcd', -1)).toBe('abc');
    expect(caesarCipher('ABC', -3)).toBe('XYZ');
    expect(caesarCipher('mjqqt', -5)).toBe('hello');
    expect(caesarCipher('aA', -1)).toBe('zZ');
  });

  test('should handle wrapping around the alphabet', () => {
    expect(caesarCipher('xyz', 5)).toBe('cde');
    expect(caesarCipher('CDE', -5)).toBe('XYZ');
    expect(caesarCipher('zZ', 2)).toBe('bB');
    expect(caesarCipher('aA', -2)).toBe('yY');
  });

  test('should handle non-letter characters', () => {
    expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
    expect(caesarCipher('123', 3)).toBe('123');
    expect(caesarCipher('@#$%', 5)).toBe('@#$%');
  });

  test('should return an empty string if input is empty', () => {
    expect(caesarCipher('', 5)).toBe('');
  });
});
