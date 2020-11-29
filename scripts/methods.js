// Methods - methods are functions that are placed as a property on objects
// for example:

const myMath = {
  // using myMath to not get confused with reserved: math
  PI: 3.14159, // just a simply property
  multiply: function (x, y) {
    // multiply is a method
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
};

// to access a method within an object we use dot notation like so:
// here we are accessing the method: 'square within the object: 'math'
console.log(myMath.square(2)); //expect 4
console.log(myMath.PI); // accessing the property

console.log(myMath['square'](4)); // accessing the cube method from object math

// short hand way of writing methods:
const myMathLater = {
  blah: 'Hi!',
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  },
};

myMathLater.add(50, 60); // 110: accessing method "add" of object "myMathLater"

// object: square, methods: area & perimeter
const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

square.area(5); //25
suqare.perimeter(7); //28
