function analyseArray(arr) {
  const min = () => {
    let lowestNumber = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < lowestNumber) {
        lowestNumber = arr[i];
      }
    }
    return lowestNumber;
  };

  const max = () => {
    let maxNumber = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
    return maxNumber;
  };
  const length = arr.length;

  const average = () => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avg = sum / arr.length;
    return avg;
  };

  return { min, max, length, average };
}

module.exports = analyseArray;
