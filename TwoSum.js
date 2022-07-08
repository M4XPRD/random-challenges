// Solution №1 (mine):
// Brute-force

const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1];

// Solution №2 (alternative):
// Hash-data

const twoSum = (numbers, target) => {
  const hash = {};
  for (let i = 0; i < numbers.length; i += 1) {
    if (hash[target - numbers[i]] !== undefined) {
      return [hash[target - numbers[i]], i];
    }
    hash[numbers[i]] = i;
  }
  return null;
};

console.log(twoSum([3, 2, 4], 6)); // [1, 2];

// Solution №3 (alternative):
// Using new Map();

const twoSum = (numbers, target) => {
  const hash = new Map();
  for (let i = 0; i < numbers.length; i += 1) {
    const currentNumber = numbers[i];
    const numberDiff = target - currentNumber;
    if (hash.has(numberDiff)) {
      return [hash.get(numberDiff), i];
    }
    hash.set(currentNumber, i);
  }
  return null;
};

console.log(twoSum([3, 3], 6)); // [0, 1];
