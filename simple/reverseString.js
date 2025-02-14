/**
 * Problem:
 * Write a program that takes a string as input and returns the string reversed.
 *
 * Your task:
 * Implement the function `reverseString` that returns the reversed string of the input.
 *
 * Example:
 * reverseString("hello") should return "olleh".
 * reverseString("world") should return "dlrow".
 */

// Write your solution here

function reverseString(abbas) {
    return Array.from(abbas).reverse().join('')
}
console.log(reverseString("abbas"))


module.exports = reverseString;
