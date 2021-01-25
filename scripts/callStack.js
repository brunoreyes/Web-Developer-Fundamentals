// CALL STACK
// The mechanism the JS interpreter uses to keep track of
// its place in a script that calls multiple functions.

// Basically, the Call Stack is how JS "knows" what function
// is currently being run & what functions are called
// from within that function

// The term stack is known as a last in, first out (LIFO)

// HOW IT WORKS

// - When a script calls a function, the interpreter adds it to
//   the call stack, and then starts carrying out the function.

// - Any functions that are called by that function are added to
//   the call stack further up, and run when their calls are reached.

// - When the current function is finished, the interpreter takes it
//   of the stack & resumes execution where it left off in the last code listing.

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

// isRightTriangle() calls square, square calls multiply, this process is repeated 3x
const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

console.log('Before');

console.log(isRightTriangle(3, 4, 5));

console.log('Done');

// Call Stack for this scenario: #nd (position the function was added to the callStack)

// 3rd multiply(3,3)
// 2nd square(3)
// 1st isRightTriangle(3,4,5)

// Now that isRightTriangle() has 1st value: 9
// it can move on to getting it's second value

// 3rd multiply(4,4)
// 2nd square(4)
// 1st isRightTriangle(3,4,5)

// Now that isRightTriangle() has 2nd value: 16
// it can move on to getting it's third & final value

// 3rd multiply(5,5)
// 2nd square(5)
// 1st isRightTriangle(3,4,5)

// Now that isRightTriangle() has 3rd & final value: 25
// it can now successfully compare the sum of the 1st 2 values against the third value

// Loupe and the sources tab (debugging tool) in the browser's inspector tool
// will show a call stack executed
