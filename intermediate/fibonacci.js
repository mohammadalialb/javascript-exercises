/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
const fibonacci = n => {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const seq = [0, 1];
    while (seq.length < n) {
        seq.push(seq.at(-1) + seq.at(-2));
    }
    return seq;
};
module.exports = fibonacci;
