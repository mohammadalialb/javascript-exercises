/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here
const isPrime = num => num > 1 && ![...Array(Math.sqrt(num) - 1)]
    .map((_, i) => i + 2)
    .some(i => num % i === 0);
module.exports = isPrime;
