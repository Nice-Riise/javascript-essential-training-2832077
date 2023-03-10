/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function calc(top, bottom) {
  let sum = top + bottom;
  return sum;
}
console.log("MOH", calc(50, 50));

function NewTotalTop(sum, bottom) {
  let NewSum = sum + bottom;
  return NewSum;
}
console.log("MOH new total calc", NewTotalTop(100, 50));
