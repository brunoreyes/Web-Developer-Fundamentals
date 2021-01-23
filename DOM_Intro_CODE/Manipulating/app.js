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


// Challenge: Invert the li elements
// ClassList
// h2.setAttribute('class','purple');

// </> = curl code

// h2.setAttribute('class','${currentClasses} purple');

// h2.classList .add(), .remove('border'), .contains(),
// h2.classList.toggle('purple');

// Invert the background colors of list items
// background-color: #B10DC9;
// }

// .highlight {
//   background-color: #7FDBFF;
// }


// <body>
//     <!--LEAVE THIS FILE ALONE!-->
//     <ul>
//         <li>Hello</li>
//         <li class="highlight">Hello</li>
//         <li>Hello</li>
//         <li>Hello</li>
//         <li class="highlight">Hello</li>
//         <li>Hello</li>
//     </ul>
// </body>

// Solution:
// const listItems = document.querySelectorAll('li');

// for ( let listItem of listItems){
//     listItem.classList.toggle('highlight');
// }


// const paragraph = firstBold.parentElement
// paragraph.children[0]

// squareImg.nextSibling // giving corresponding node // which in some cases is white space: "return char   "

// squareImg.nextElementSibling gives the actual element sibling so if img, then the next img

// creating an element: const newImg = document.createElement('img')
// newImg.src('image address')
// document.body.appendChild(newImage) // adding the img to the end of the body
// newImg.classList.add('square')
// newImg.classList.add('square')
// const newH3 = document.createElement('h3') // <h3></h3>
// newH3.innerText = "I am new!"
// document.body.appendChild(newH3) // <h3>I am new!</h3>

// const p = document.querySelector('p')// selecting the paragraph element
// p.append('i am new text yay!') // .append allows us to add multiple nodes, doesn't work on Internet Explorer b/c too new
// appending two things and making them the last child of the element // p.append('i am new text yay!', 'i am more text!')

// const newB = document.createElement('b');
// newB.prepend(newB) // prepend allows you to add a node to the beginning of an element instead of append making it the last

// instertAdjacentElement allows to insert an item within an element
// for ex: in header <h2>Silkie Chickens</h2> 
// h2.append('Are adorable chickens')
// const h1 = document.querySelector('h1sxwwaZ')
// h1.insertAdjacentElement('afterend', h2)
// h1.nextElementSibling // h2


// Challenge:
// Create exactly 100 new buttons with text in them and append them to the constianer div

{/* <body>

    <div id="container">
    
    </div>
</body>

Solution:

const container = document.getElementById('container');

for (let i = 0; i < 100; i++) {
    const heyButton = document.createElement('button');
    heyButton.innerText = "Hey!";
    container.appendChild(heyButton);
} */}

// .removeChild() removes a child node while .remove() removes an object on the tree it belongs to (doesn't work in Int. Explorer)