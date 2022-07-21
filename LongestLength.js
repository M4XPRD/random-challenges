// My solution

export default (string) => {
  const stats = {
    collection: [],
    maxLength: 0,
  };
  const newString = [...string];
  for (const letter of newString) {
    const index = stats.collection.indexOf(letter);
    stats.collection.push(letter);
    if (index >= 0) {
      stats.collection = stats.collection.slice(index + 1);
    } if (stats.collection.length > stats.maxLength) {
      stats.maxLength = stats.collection.length;
    }
  }
  return stats.maxLength;
};

// Teacher solution

const getLongestLength = (str) => {
  let sequence = [];
  let maxLength = 0;


  for (const char of str) {
    const index = sequence.indexOf(char);
    sequence.push(char);
    if (index !== -1) {
      sequence = sequence.slice(index + 1);
    }
    const sequenceLength = sequence.length;
    if (sequenceLength > maxLength) {
      maxLength = sequenceLength;
    }
  }
  return maxLength;
};

export default getLongestLength;
