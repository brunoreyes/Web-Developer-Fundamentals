let tvShow = 'catdog';

tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (aka not found)

'abcd'.toUpperCase(); //output is "ABCD"

'haha that is so funny!'.indexOf('h'); //output is 0
'haha that is so funny!'.indexOf('*'); // output is -1 bc it's not found
'haha that is so funny!'.indexOf('is');

let str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31)); //output: "the lazy dog"
console.log(str.slice(4, 19)); // str.slice(starting index #, ending index #) output: "quick brown fox"
console.log(str.slice(-4)); // str.slice(negative index starting from 1 at the back #) output: "dog."
console.log(str.slice(-9, -5)); //  str.slice(negative index starting #, negative index ending #) "lazy"

'lol'.repeat(10); // this repeats the string 1- times output: lollollollollollollollollollol

str.replace('h', 'H'); // .replace(currentValue, newValue) this string replaces an argument with a new argument
