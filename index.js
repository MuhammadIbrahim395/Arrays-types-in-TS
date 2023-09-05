"use strict";
console.log("Q no 1");
//Write a program that uses filter to remove all negative numbers from an array of numbers
let arr = [-2, -3, 4, -1, 5, 3, 2];
let positiveInteger = arr.filter((element) => {
    if (element > 0) {
        return element;
    }
});
console.log(positiveInteger);
console.log("Q no 2");
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let array = [1, 2, 3, 4, 5];
let multiplied = array.map((num) => {
    // console.log(num);
    return num * 2;
});
console.log(multiplied);
console.log("Q no 3");
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let arrString = ["apple", "banana", "cherry", "date", "grape"];
let fruitNames = arrString.filter((fruits) => {
    return fruits.length > 5;
});
console.log(fruitNames);
console.log("Q no 4");
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = arrNum.filter((numeric => numeric % 2 == 0));
let sqs = evenNums.map((numeric) => { return numeric * numeric; });
console.log(sqs);
console.log("Q no 5");
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let tempInCelcius = [0, 10, 20, 30, 40];
let converter = tempInCelcius.map((Celsius) => {
    return (Celsius * 9 / 5) + 32.;
});
console.log(converter);
console.log("Q no 6");
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let arrOfOddNum = [3, 6, 9, 12, 15, 18];
let oddNum = arrOfOddNum.filter((num1 => num1 % 2 !== 0));
let oddNum1 = oddNum.map((num1) => {
    return num1 * num1;
});
console.log(oddNum1);
console.log("Q no 7");
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!". 
let names = ["Alice", "Bob", "Charlie", "David", "Emily"];
let newNames = names.forEach((value, index, array) => {
    array[index] = value + "!";
});
console.log(names);
// now the assignment is over.
