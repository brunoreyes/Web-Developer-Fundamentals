const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

// Commands in terminal to grab specific objects: document.all[10]

// Challenge: Select the image and h1 element and assign them to vars image & heading

{/* <h1 id="mainheading">I &hearts; Unicorns</h1>
<img id="unicorn" src="https://www.flaticon.com/svg/static/icons/svg/3468/3468081.svg" alt="" width="200px"> */}

 // Solution: 
// const image = document.getElementById("unicorn");
// const heading = document.getElementById("mainheading");

// .getElementsByTagName()
// .getElementsByClassName()

// or .querytSelector('h1'), selecte element object       the all-in-one method to select a single element
// .querytSelector('.big') select a class
// .querytSelector('#red') select a tag


// .querytSelectorAll() returns a collection of matching elements rather than only one single kind of element

const links = document.querySelectorAll('p a'); // returns all p & a tag elements

for (let link of links) {
    console.log(link.href);
    
}

// nth of type, 


// Challenge: 
// Select all elements that have the class of "done" and save them in a variable called doneTodos.

// Select the one checkbox and save it in a variable called checkbox.Be careful, there is more than
// one input element on the page! You'll need to select using the type attribute. (if you can't remember
// the css attribute selector...google it! That's what I would do!).

// <body>
//     <h1>Garden Todos</h1>
//     <input type="text" placeholder="New Todo">
//     <ul>
//         <li>Start Seedlings</li>
//         <li class="done">Deadhead Zinnias</li>
//         <li class="done">Water Tomatoes</li>
//         <li class="done">Harvest Potatoes</li>
//         <li>Prune Roses</li>
//     </ul>
//     <label>Delete All</label>
//     <input type="checkbox" id="scales" name="scales" checked>

// </body>

// Solution: 
// const doneTodos = document.querySelectorAll(".done");
// const checkbox = document.querySelector("#scales");

// maniputaling DOM elements using methods: classList, getAttribute(), setAttribute(), appendChild(), append(), 



// // Challenge:
// Select the div with the id of container.  Using JavaScript, set it's text alignment to 'center';

// Select the image and use JavaScript to give it a width of 150px and a border radius of 50%
// <!DOCTYPE html>

// <head>
//     <title>Forest</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//    <div id="container">
//         <h1>I &hearts; Trees</h1>
//         <img src="https://images.unsplash.com/photo-1596328546171-77e37b5e8b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
//     </div>
// </body>

// </html>

// // Solution: 
// document.getElementById("container").style.textAlign = "center";

// document.querySelector("img").style.width = "150px";

// document.querySelector("img").style.borderRadius = "50%";