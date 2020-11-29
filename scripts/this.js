// keyword: 'this' is used to access other properties on the same object
const person = {
  first: 'Robert',
  last: 'Herjavec',
  fullName() {
    return `${this.first} ${this.last}`;
  },
};
console.log(person.first);
person.last = 'Plant'; //changing the value of the 'last' property
console.log(person.fullName()); // Robert Plant

// cat object, meow method
const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'Scottish fold',
  meow() {
    console.log('This is "This"', this);
    console.log('Meow Meow Meow');
    console.log(this.color); // accessing a property value that's in the object
  },
};

console.log(cat.meow());

const meow2 = cat.meow;
// The value of 'this' depends on the invocation context of the function it is used in.

// meow2 now opens the window object on line 19 instead of all the properties
// originally meant for cat: name, breed, etc..

// window is a huge object that contains alert, and so many other methods
console.log(meow2());

function scream() {
  console.log('AHHHHHHHH');
}
console.log(scream());

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    this.eggCount++; //accessing the object's local property, 'eggCount'
    //using 'this' and incrementing the eggCount by 1
    return 'EGG';
  },
};
console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.eggCount);
console.log(hen.eggCount);

// the keyword "this" behaves differently in an arrow function than it does a reg function
const person2 = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  fullNameArrowVersion: () => {
    return `${this.firstName} ${this.lastName}`;
  }, // this is the window object in an arrow function
  shoutNameArrow: function () {
    setTimeout(() => {
      console.log(this); // {firstName: "Viggo", lastName: "Mortensen", fullName: ƒ, fullNameArrowVersion: ƒ, shoutNameArrow: ƒ, …}
      console.log(this.fullName());
    }, 3000); // good, using an arrow function time out
    //   we don't have to worry about getting a new value
    //   for "this".
  },
  shoutName: function () {
    //bad
    setTimeout(function () {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
console.log(person2.fullName());
console.log(person2.shoutNameArrow());
