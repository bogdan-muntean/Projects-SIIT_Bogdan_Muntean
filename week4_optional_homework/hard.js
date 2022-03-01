// Hard:
// 1
// https://edabit.com/challenge/c23dFfNiKbnguSQtq
// Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
// Examples
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
// findNemo("Nemo is me") ➞ "I found Nemo at 1!"
// findNemo("I Nemo am") ➞ "I found Nemo at 2!"

// Notes
//     ! , ? . are always separated from the last word.
//     Nemo will always look like Nemo, and not NeMo or other capital variations.
//     Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
//     If there are multiple Nemo's in the sentence, only return the first one.


// 2
// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.