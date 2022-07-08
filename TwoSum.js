// Solution №1:
// Brute-force O(n2) solution

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i += 1) {
        for (let j =  i + 1; j < nums.length; j += 1) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
