// Medium: (+1 )

// 1
// https://edabit.com/challenge/4gzDuDkompAqujpRi
// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples

// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

// Notes
// Expect any positive number between 1 and 1000.

//REZOLVARE
// function addUp(num) {
// 	var sum = 0;
// 	if(num >= 1 && num <= 1000){
// 		while(num != 0){
// 			sum += num;
// 			num--;
// 		}
// 		return sum;
// 	} 
// 	else {
// 		return 1
// 	}
// }

// 2
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm
// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// Examples

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

// Notes
// All test arrays will have at least one element and are valid.

//REZOLVARE
// function minMax(arr) {
// 	if(arr.length < 1){
// 		return 1
// 	}
// 	var min = arr[0], max = arr[0];
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] < min){
// 			min = arr[i]
// 		} 
// 	}
// 	for(var i = 0; i < arr.length; i++){
// 		if (arr[i] > max){
// 			max = arr[i]
// 		}
// 	}
	

// 3
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

//REZOLVARE
// function doubleChar(str) {
// 	var finalString = "";
// 	for(var i = 0; i < str.length; i++){
// 		finalString += str[i] + str[i];
// 	}
// 	return finalString;
// }

// 4
// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
// [1, 3, 3, 5, 5, 5]
//  original array
// [1, 3, 5]
//  original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.
// Examples
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
// set([4, 4, 4, 4]) ➞ [4]
// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
// set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
// Notes
//     For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
//     See resources for a hint if you get stuck.


//REZOLVARE
// function set(arr) {
// 	var finalArray = [...new Set(arr)];
// 	return finalArray;
// }

// 5
// https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
// Chat Room Status
// Write a function that returns the number of users in a chatroom based on the following rules:
//     If there is no one, return "no one online".
//     If there is 1 person, return "user1 online".
//     If there are 2 people, return "user1 and user2 online".
//     If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:
// "user1, user2 and 3 more online"

// Examples
// chatroomStatus([]) ➞ "no one online"
// chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"
// chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"
// chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
// ➞ "pap_ier44, townieBOY and 4 more online"
// Notes
// N/A

// function chatroomStatus(users) {
// 	var finalOutput = "";
// 	var usersLength = users.length;
// 	if(usersLength === 1){
// 		 finalOutput = users[0] + " online";
// 		}
// 	else if(usersLength === 2){
// 		finalOutput = users[0] + " and " + users[1] + " online";
// 		}
// 	else if(usersLength >= 3){
// 		finalOutput = users[0] + ", " + users[1] + " and " + (users.length - 2) + " more online";
// 		}
// 	else { 
// 		finalOutput = "no one online";
// 		}
	
// 	return finalOutput;
// }