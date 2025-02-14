/**
 * Problem:
 * Write a recursive function that calculates the factorial of a given number.
 *
 * Your task:
 * Implement the function `factorial` which calculates the factorial of the input number recursively.
 *
 * Example:
 * factorial(5) should return 120.
 * factorial(0) should return 1.
 */

// Write your solution here

function factorial(n) {
    if(n<0) return "Invalid input"
    if(n===0 || n ===1) return 1
    return n*factorial(n-1)
}

module.exports = factorial;
