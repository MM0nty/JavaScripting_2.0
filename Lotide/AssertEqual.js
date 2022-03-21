const assertEqual = function(actual, expected) {
if (actual !== expected) {
  console.log(`Assertion failed: ${actual} !== ${expected}`);
  return;
}
console.log(`Assertion passed: ${actual} === ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);