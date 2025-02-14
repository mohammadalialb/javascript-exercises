/**
 * Problem:
 * Write a function that converts a temperature from Celsius to Fahrenheit.
 *
 * Your task:
 * Implement the function `celsiusToFahrenheit` that converts a given temperature in Celsius to Fahrenheit.
 *
 * Example:
 * celsiusToFahrenheit(0) should return 32.
 * celsiusToFahrenheit(100) should return 212.
 */

// Write your solution here

function celsiusToFahrenheit(Celsius) {
    return(Celsius * 9/5) + 32
}

module.exports = celsiusToFahrenheit;
