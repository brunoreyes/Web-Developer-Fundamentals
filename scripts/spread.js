// SPREAD
// Spread suntax allows an iterable such as an array to be expanded
//  in places where zero or more arguments(for function calls) or
// elements(for arrays literals) are expected, or an object expression to
// be expanded in places where zero or more key-value pairs (for object literals) are expected.

Math.max(13, 4, 5, 6, 7, 8, 9, 10); // shows the max of all the nums

Math.min(13, 4, 5, 6, 7, 8, 9, 10); // shows the min of all the nums

const nums = [13, 4, 5, 21, 3, 3, 54304];
Math.max(...nums); // 54304: using spread syntax: "..." before an
// object, we can spread each item within the array as their own arugments

console.log(...nums); //13 4 5 21 3 3 54304
// spread can spread numbers, strings
console.log(...'hello'); // h e l l o

// Spread suntax allows an iterable such as an array to be expanded
// in places where zero or more arguments or elements are expected,
// pr an object expression to be expanded in places where zero or more
// key-value pairs are expected

// spreading an array
const dogs = ['Rusty', 'Wyatt'];
const cats = ['Blue', 'Scout', 'Rocket'];
const copyCats = [...cats];

// combining two spreaded arrays into one array
const allPets = [...cats, ...dogs]; // ["Blue", "Scout", "Rocket", "Rusty", "Wyatt"]
//creating a new array
console.log(allPets);

// speading an object literal
// copying properties from one object into another object literal

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };
const felineCopy = { ...feline, color: 'black' }; //adding property to spreaded object
console.log(felineCopy); //{legs: 4, family: "Felidae", color: "black"}

const catDog = { ...feline, ...canine }; //since they both have the property 'family'
// canine's family property value will ultimately be the choosen one,
// since it is the last object spreaded and combined
console.log(catDog); //{legs: 4, family: "Caninae", isFurry: true}

const catDogNew = { ...feline, ...canine, family: 'cat dog' };
// now 'cat dog' is the new value for property 'family'
// because it came last
console.log(catDogNew); //{legs: 4, family: "cat dog", isFurry: true}

// spreading an array into an object
console.log({ ...[2, 4, 6, 8] }); //{0: 2, 1: 4, 2: 6, 3: 8}
// here the index's are used as the keys, and nums are the value
console.log({ ...'HIII' }); //{0: "H", 1: "I", 2: "I", 3: "I"}

const dataFromForm = {
  email: 'blueman@gmail.com',
  password: 'tobias123!',
  username: 'tfunke',
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
// here we are spreading the data, an adding 2 properties
console.log(newUser); //{email: "blueman@gmail.com", password: "tobias123!", username: "tfunke", id: 2345, isAdmin: false}
