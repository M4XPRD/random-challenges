// Solution №1:
// Via recursion

const recursiveArraySum = (collection) => {
  if (collection.length === 1) {
    const [lastNumber] = collection;
    return lastNumber;
  }
  return collection.pop() + recursionSum(collection);
};

console.log(recursiveArraySum([2, 3, 4, 5, 6, 7])); // 27

// Solution 2:
// Using high-order functions

const arraySum = (collection) => collection.reduce((a, b) => a + b);

console.log(arraySum([11, 22, 33, 44, 55, 66])); // 231
