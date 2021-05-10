// assignment-10 1- even numbers
function evenNumbers(array) {
  return array.filter(number => number % 2 === 0).join(", ");
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));


// assignment-10 3- average
// function average(array) {
//   const result = array.reduce((sum, number) => sum + number) / array.length;
//   return "The average is " + result;
// }
// console.log(average([2, -6, 10, 3, -5, 0, 7, 2, 1, -2, 11, 0, 13, 4, 1, 0, -9, 1, 0, 3]));


// assignment-10 4- largest number
// function largestNumber(array) {
//   return array.reduce((largest, number) => {
//     if (largest < number) {
//       largest = number;
//     }
//     return largest;
//   });
// }
// console.log(largestNumber([2, -6, 10, 3, -5, 0, 7, 2, 1, -2, 11, 0, 13, 4, 1, 0, -9, 1, 0, 3]));


// assignment-10 5- even odd number
// function evenOddNumber(array) {
//   return array.reduce((result, number) => result + (number % 2 === 0 ? number + " is even" : number + " is odd") + "\n", "");
// }
// console.log(evenOddNumber([2, 6, 10, 3, 5, 2, 1, 2, 11]));


// assignment-10 6- narcissistic number
// function narcissisticNumber() {
//   const input = prompt("Please enter a number...");
//   const value = String(Number(input) || 0);
//   const result = value.split("").reduce((result, number) => result + (number ** value.length), 0);
//   return result === +value ? "Narcissistic" : "Not Narcissistic"
// }
// console.log(narcissisticNumber());


// 2- containsZero
// function containsZero(array) {
//   return array.some(number => number === 0);
// }

// console.log(containsZero([7, 1, 13, 4]));


// 3- allPositive
// function allPositive(array) {
//   return array.every(number => number > 0);
// }
// console.log(allPositive([7, 1, 13, 4]));


// 4- joinStrings
// function joinStrings(array, character) {
//   return array.reduce((string, word) => string + (character || ",") + word);
// }
// console.log(joinStrings(['i', 'love', 'programming']));




