try {
  hello.toUpperCase(); // we anticipate this should be an error
  // so we wrap it within curly braces within a try
} catch {
  // catch is activated if an error within try occurs
  console.log('Error!');
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    // grabbing the error within the catch parameter
    console.log(e);
    console.log('Please pass a string next time!');
  }
}

console.log(yell(2)); // will produce an error b/c 2 can't be capitalized
