/*
simple multiply function derived with the TDD method
multiply() returns 1;
multiply(22) returns 22;
multiply(22, 2) returns 44;
multiply(2, 2, 2) returns 8;
*/

///solutions///

// first iteration

test('should return 1 if nothing is passed', () => {
  const result = multiply();
  expect(result).toBe(1)
})

function multiply() {
  return 1;
}

// second iteration

test('should return the number if only one number is passed', () => {
  const number = 22;
  const result = multiply(number);
  expect(result).toBe(number);
})

function multiply(number) {
  return number;
}
//!! breaks first test!!! why tdd works

// refactor
function multiply(number = 0) {
  return number
}

// third iteration

test('should take multiple arguments and return the product', () => {
  const number1 = 2;
  const number2 = 2;
  const number3 = 2;
  const result = multiply(number1, number2, number3);
  expect(result).toBe(8);
})

function multiply(...numbers) {
	return numbers.reduce((acc, num) => acc * num, 1)
}