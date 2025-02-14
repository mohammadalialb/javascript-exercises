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

function fibonacci(n) {
    if(n<=0) return[]
    if(n===1) return[0]

    let sequence = [0,1]

    for(let i = 2 ; i<n ; i++){
        sequence.push(sequence[i-1] + sequence[i-2])
    }
    return sequence
}


module.exports = fibonacci;
