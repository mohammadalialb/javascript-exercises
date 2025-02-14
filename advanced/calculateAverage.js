/**
 * Problem:
 * Write a function that calculates the average of the numbers in an array.
 *
 * Your task:
 * Implement the function `calculateAverage` that returns the average of the numbers.
 *
 * Example:
 * calculateAverage([1, 2, 3, 4]) should return 2.5.
 * calculateAverage([10, 20, 30]) should return 20.
 */

function calculateAverage (num){
 
    let sum = 0;
    for( let i = 0 ; i < num.length ; i++){
        sum += num[i];
    } 
    return sum / num.length ;
}


module.exports = calculateAverage;
