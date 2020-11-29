const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (text) {
  return text.toUpperCase();
});
texts; // ['rofl', 'lol', 'omg', 'ttyl']
caps; // ['ROFL', 'LOL', 'OMG', 'TTYL']

// to trim off extra spaces off text use .trim()
const names = ['charles ', ' doggy '];
const cleanNames = names.map(function (newName) {
  return newName.trim();
});

cleanNames;
console.log(cleanNames);
