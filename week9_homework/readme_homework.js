// Convertire la es6
// Va trebuie sa rescrieti codul cu sintaxa de es6 de la tema din week8 si week7
// 1.	Folosim obligatoriu ( async/wait ) doar sinxata de ES6
// 2.	Atentie la formatarea codului
// 3.	Nume de variabile/functii cat mai sugestive


// 4.	Focus pe code quality ( de citit obligatoriu )
// •	https://deepsource.io/blog/javascript-code-quality-best-practices/
//Informatii noi:
// a)Optional Chaining
person = {
  age: 42
}
person.name.first // TypeError: Cannot read property 'first' of undefined
person.name.last // TypeError: Cannot read property 'last' of undefined

person?.name?.first // undefined

// b)Null-ish coalescing ??

// Inainte a fost OR operator ca si fallback
// Before introducing the null-ish coalescing operator, JavaScript developers used the OR operator || to fall back to a default 
// value if the input was absent. This came with a significant caveat that even legitimate but falsy values would 
// result in a fallback to the defaults.
function print(val) {
  return val || 'Missing'
}

print(undefined) // 'Missing'
print(null) // 'Missing'

print(0) // 'Missing'
print('') // 'Missing'
print(false) // 'Missing'
print(NaN) // 'Missing'

// JavaScript has now proposed the null coalescing operator ??, which offers a better alternative in that it 
// only results in a fallback if the preceding expression is null-ish. Here null-ish refers to values that are null or undefined.

function print(val) {
  return val ?? 'Missing'
}

print(undefined) // 'Missing'
print(null) // 'Missing'

print(0) // 0
print('') // ''
print(false) // false
print(NaN) // NaN
// This way, you can ensure that if your program accepts falsy values as legitimate inputs, you won't end up replacing them with fallbacks.

// c) Logical assignment
//Let's say you want to assign a value to a variable if and only if the value is currently null-ish. A logical way to write this would be like so:
if (x === null || x == undefined) {
  x = y
}

// If you knew about how short-circuiting works, you might want to replace those 3 lines of code with a more succinct version
// using the null-ish coalescing operator.

x ?? (x = y) // x = y if x is nullish, else no effect
//sau
x ??= y // x = y if x is nullish, else no effect

// Along the same lines, JavaScript also introduces logical AND assignment &&= and logical OR assignment ||= operators. 
// These operators perform assignment only when the specific condition is met and have no effect otherwise.
x ||= y // x = y if x is falsy, else no effect
x &&= y // x = y if x is truthy, else no effect

// d) Named capture groups - regular expressions
// Let's start with a quick recap of capture groups in regular expressions. A capture group is 
//a part of the string that matches a portion of regex in parentheses.
let re1 = /(\d{4})-(\d{2})-(\d{2})/
let result1 = re.exec('Pi day this year falls on 2021-03-14!')

result[0] // '2020-03-14', the complete match
result[1] // '2020', the first capture group
result[2] // '03', the second capture group
result[3] // '14', the third capture group

//Regular expressions have also supported named capture groups for quite some time, which is a way for the capture 
//groups to be referenced by a name rather than an index. Now, with ES9, this feature has made its way to JavaScript. 
//Now the result object contains a nested groups object where each capture group's value is mapped to its name.
let re2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
let result2 = re.exec('Pi day this year falls on 2021-03-14!')

result.groups.year // '2020', the group named 'year'
result.groups.month // '03', the group named 'month'
result.groups.day // '14', the group named 'day'

// The new API works beautifully with another new JavaScript feature, de-structured assignments.
let re3 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
let result3 = re.exec('Pi day this year falls on 2021-03-14!')
let { year, month, day } = result.groups

year // '2020'
month // '03'
day // '14



// •	https://javascript.info/coding-style
// •	https://javascript.info/code-quality
