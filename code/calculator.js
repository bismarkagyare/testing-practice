const calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('impossible');
    return a / b;
  },
};

module.exports = calculator;
