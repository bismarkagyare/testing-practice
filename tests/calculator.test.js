const calculator = require('../code/calculator');

describe('calculator', () => {
  test('add numbers', () => {
    const result = calculator.add(4, 5);
    expect(result).toBe(9);
  });

  test('substract numbers', () => {
    const result = calculator.substract(10, 5);
    expect(result).toBe(5);
  });

  test('multiply numbers', () => {
    const result = calculator.multiply(4, 2);
    expect(result).toBe(8);
  });

  test('divide numbers', () => {
    const result = calculator.divide(8, 2);
    expect(result).toBe(4);
  });
});
