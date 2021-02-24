class Pet {
  constructor(name, age) {
    console.log('In per constructor');
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  // extending from pet the constructor
  constructor(name, age, livesLeft = 9) {
    console.log('In cat constructor');
    super(name, age); // super references the class I am extending from, so pet (which we call the "super class")
    // because it's the class we extend from. super does the this.name = name from the pet constructor
    this.livesLeft = livesLeft;
  }
  meow() {
    return 'MeoWWW!!';
  }
}

// const monty = new Cat('monty', 9);
// monty.eat()

class Dog extends Pet {
  bark() {
    return 'Woof!!';
  }
  eat() {
    // this is the first eat that a dog will look for before extending to the pet's eat function
    return `${this.name} is eating!`;
  }
}
