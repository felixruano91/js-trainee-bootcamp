// write a function called sum that takes
// to arguments: a and b, both numbers.
// Return the sum of.
function sum(a, b) {
  // @TODO
}

sum(1, 2); // 3

// write a function called log data that
// prints into the console the
// variable data
var data = 10;

function logData() {
  // @TODO
}

logData();

// write a function called logNumber that
// prints to the console the variable
// num passed as an argument.
// If the variable is not passed (undefined)
// print 0 instead
function logNumber(/* @TODO */) {
  // @todo
}

logNumber(10); // 10
logNumber(); // 0

// write a function called logAsArray
// that takes n amount of arguments
// and print an array containing
// all of the elements
function logAsArray(/* @TODO */) {
  // @TODO
}

logAsArray(1, 2); // [1,2]
logAsArray(1, 2, 3); // [1,2,3]
logAsArray(1, 2, 3, 4, 5); // [1,2,3,4,5]

// write a function called logArray
// that takes an array as argument
// and prints every element of
// the array
function logArray(/* @TODO */) {
  // @TODO
}

logArray([1, 2, 3, 4, 5]);
// 1
// 2
// 3
// 4
// 5

// Declare a function called Car and three
// strings as its arguments, brand, model and year
// and execute it as a function as constructor
// to generate a car object with the
// properties model and year.
function Car(brand, model, year) {
  // @TODO
}

var teslaS = new Car(/* @TODO */);

// Let calculateRectanglePerimenter be a function
// returns the perimeter when its applied to
// a rectangle object.
function calculateRectanglePerimeter() {
  // @TODO
}

calculateRectanglePerimeter.apply({
  height: 2,
  width: 2
}); // 8

// Write a function called calculateCirclePerimeter
// and create another function called boundCalculateCirclePerimeter
// that is the result of binding the first function
// to a circle object
function calculateCirclePerimeter() {
  // @TODO
}

var boundCalculateCirclePerimeter = calculateCirclePerimeter.bind({
  radius: 2
});

boundCalculateCirclePerimeter(); // ~ 12.56

// CODE CHALLENGES

// Write a function called reverseString that
// takes a string as an argument and
// returns it reversed
function reverseString(str) {
  // @TODO
}

reverseString("hola"); // aloh

// Write a function called sortString that
// takes a string as an argument and
// returns it sorted alphabetically
function sortString(str) {
  // @TODO
}

sortString("david"); // 'addiv'

// Write a function called arePalindromes that
// takes two strings as arguments and
// return true if one is the palindrome
// of the other returns returns false otherwise
function arePalindromes(a, b) {
  // @TODO
}

arePalindromes("anita lava la tina", "anit al aval atina"); // true
arePalindromes("avid", "diva"); // true
arePalindromes("juan", "jose"); // false
