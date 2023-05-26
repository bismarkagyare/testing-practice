const analyseArray = require('../code/analyseArray');

describe('analyse the array', () => {
  test('find the min, max, avg, length', () => {
    const arr = [2, 1, 8, 4, 9, 3];
    const result = analyseArray(arr);

    expect(result.min()).toBe(1);
    expect(result.max()).toBe(9);
    expect(result.average()).toBe(4.5);
    expect(result.length).toBe(6);
  });

  test('should handle an array with a single element', () => {
    const arr = [8];
    const result = analyseArray(arr);

    expect(result.min()).toBe(8);
    expect(result.max()).toBe(8);
    expect(result.average()).toBe(8);
    expect(result.length).toBe(1);
  });
});
