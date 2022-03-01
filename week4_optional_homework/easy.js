
//  1 
//https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and return their sum.

// var x = 5;
// var y = 10;

// function sum(number1, number2){
//      console.log(number1 + number2);
// }

// sum(x ,y);

// 2
// https://edabit.com/challenge/8q54MKnRrm89pSLmW
// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// var z = 5
// function convert(minutes){
//     return console.log(minutes * 60);
// }
// convert(z);


// 3
// https://edabit.com/challenge/NAQhEoxbofPidLxm9
// Return the Next Number from the Integer PassedCreate a function that takes a number as an argument, 
// increments the number by +1 and returns the result.

// var a = 5 
// function increment (argument){
//     return argument += 1;
// }
// console.log(increment(a));

// 4
// https://edabit.com/challenge/QaApgtePE6QrCZ64o
// Return the First Element in an ArrayCreate a function that takes an 
// array containing only numbers and return the first element.

// var numbers = [5, 2, 8, 9, 7, 5, 3, 8, 2]
// var letters = [9, 'k', 8, "2", "I"];

// var isNumber;
// function ArrayCreate (array){
//     for(var i = 0; i < array.length; i++){
//         if(typeof array[i] != 'number'){
//             return console.log("Array does not contain only numbers.")
//         } else {
//             isNumber = true;
//         }
//     }
//     if(isNumber === true)
//         return console.log(array[0]);
// }

// ArrayCreate(numbers)
// ArrayCreate(letters)

// 5
// https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
// Return the Remainder from Two NumbersThere is a single operator in JavaScript, capable of providing 
// the remainder of a division operation. 
// Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. 
// Return that value.

// function remainder(x, y) {
// 	return x % y;
// }

// 6
// https://edabit.com/challenge/8Qg78sf5SNDEANKti
// The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
// The farmer breeds three species:

//     chickens = 2 legs
//     cows = 4 legs
//     pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. 
// You have to implement a function that returns the total number of legs of all the animals.

// function animals(chickens, cows, pigs) {
// 	var totalLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
// 	return totalLegs;
// }

// 7
// https://edabit.com/challenge/iBQYbSHZGhpktLRdn
// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// function divisibleByFive(n) {
// 	if(n % 5 === 0)
// 		return true
// 	else
// 		return false
// }

// 8
// https://edabit.com/challenge/yHGowWucg3k2kJdZ4
// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on 
// whether the total number of characters in the first string is equal to the total number of 
// characters in the second string.

// function comp(str1, str2) {
// 	if(str1.length === str2.length)
// 		return true
// 	else 
// 		return false
// }

// 9
// https://edabit.com/challenge/kLa2w7m4h849k8rmW
// Say "Hello" Say "Bye"
// Write a function that takes a string name and a number num (either 0 or 1) and 
// return "Hello" + name if num is 1, otherwise return "Bye" + name.

// function sayHelloBye(name, num) {
// 	if(num === 1)
// 		return "Hello " + name[0].toUpperCase() + name.slice(1).toLowerCase();
// 	else if(num === 0)
// 		return "Bye " + name[0].toUpperCase() + name.slice(1).toLowerCase();
// }

