/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here
const numberToWords = num => {
    if (num === 0) return "zero";

    const belowTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"];

    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];

    const helper = n =>
        n === 0 ? "" :
        n < 20 ? belowTwenty[n] + " " :
        n < 100 ? tens[Math.floor(n / 10)] + " " + helper(n % 10) :
        belowTwenty[Math.floor(n / 100)] + " hundred " + helper(n % 100);

    let result = "", i = 0;
    
    while (num > 0) {
        if (num % 1000) result = helper(num % 1000) + thousands[i] + " " + result;
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
};
module.exports = numberToWords;
