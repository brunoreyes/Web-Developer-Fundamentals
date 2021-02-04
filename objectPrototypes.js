// Prototypes are the mechanism by which JS objects inherit features from one another.
const body = document.body;
// Prototypes are template objects that typically contain a bunch of methods
// Multiple objects can be created that share the same prototype

// String, Int are primitiveIntermediate object wrappers
String.prototype.grumpus = () => alert('GO AWAY!!!');
String.prototype; // prototype object for every String
String.prototype.yell = function () {
  console.log(this.toUpperCase());
};

String.prototype.yell2 = function () {
  return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'hello'.yell(); // calling string hello to uppercase so: HELLO

// We can change the functionality of built in methods using prototypes
Array.prototype.pop = function () {
  // now pop no longer takes off the last item of an array
  return `Sorry I want that element, I will never pop it off!`; // instead it returns this statement
};

// prototypes (thing of it like a template or blueprint) are a single object that contains common properties and methods that other copies or strings
// and objects look up to find their common properties

// Array.prototype is the actual object where we add the methods and properties too.

// __proto__ is a property name or reference to the TypeOf.prototype

// so __proto__  of String.prototype is a reference to String.prototype
