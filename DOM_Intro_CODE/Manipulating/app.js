const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = 'rgb(0, 108, 134)';
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
}

// preprend(), removeChild(), remove(), createElement, innerText, textContent, innerHTML, value, parentElement,
// children, nextSibling, previousSibling, style

// Challenge:
// Please use JavaScript to select the <span> element that currently reads "Delicious"

// Change its text to read "Disgusting" USING JAVASCRIPT.Even if you are a weirdo who likes pickles,
//     please change the text to "Disgusting".

// <!DOCTYPE html>

// <head>
//     <title>Pickles</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <!--PLEASE LEAVE THIS LINE ALONE! MAKE YOUR CHANGES USING JAVASCRIPT!!-->
//     <h1>Pickles Are <span>Delicious</span></h1>
// </body>

// </html>

// Solution:
// let spanElement =
// document.querySelector('span').textContent = "Disgusting";

// Challenge:
// Please select the image element and:

// change its source to this url: https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg

// <!DOCTYPE html>

// <head>
//     <title>Egg and Chicken</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <!--DONT CHANGE ANYTHING IN THIS FILE, PLEASE!-->
//     <h1>Which Came First?</h1>
//     <img id="egg" src="https://www.flaticon.com/svg/static/icons/svg/528/528166.svg" width="200px" alt="egg">
//     <!--Icons made by http://www.freepik.com-->
// </body>

// </html>

// // Solution:
// document.querySelector('img').src = "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg";
// document.querySelector('img').alt = "chicken";

// .getCompuedStyle(h1).fontSize

// h1.style.border = "2px solid pink";

// for ?(let link of links){
// link.style.color = '#403221';
// }

// Challenge:
// Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.
{
  /* <h1>
<span>R</span>
<span>A</span>
<span>I</span>
<span>N</span>
<span>B</span>
<span>O</span>
<span>W</span>
</h1> */
}

// Solution:
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// let spans = document.querySelectorAll('span');
// for (let i=0; i< spans.length; i++){
//     spans[i].style.color = colors[i];
// }

// OR

// let count = 0;
// for (let span of spans) {
//     span.style.color = colors[count];
//     count++;
// }
