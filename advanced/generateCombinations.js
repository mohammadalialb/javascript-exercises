/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */

function generateCombinations(nums) {
    const result = [];
    const n = nums.length;


    const backtrack = (start, current, length) => {
        if (current.length === length) {
            result.push([...current]);
            return;
        }
        for (let i = start; i < n; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current, length);
            current.pop();
        }
    };

    for (let len = 1; len <= n; len++) {
        backtrack(0, [], len);
    }

    return result;
}

module.exports = generateCombinations;
