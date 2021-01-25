// RGB Random color exercise

const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
  // document.body.style.backgroundColor = 'olive';
  const newColor = makeRandomColor;
  document.body.style.backgroundColor = newColor;
  h1.innerText.newColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
  h1.addEventListener('click', colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}

const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
  // when you hold a key down
  console.log(e.key);
  console.log(e.code);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', function () { // when you hold a key down
//     console.log('KEYDOWN');
// });

input.addEventListener('keyup', function () {
  // when releasing a key
  console.log('KEYUP');
});

input.addEventListener('keydown', function () {
  // when you hold a key down
  console.log('KEYDOWN');
});

window.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowUp':
      console.log('UP!');
      break;
    case 'ArrowDown':
      console.log('DOWN!');
      break;
    case 'ArrowLeft':
      console.log('LEFT!');
      break;
    case 'ArrowRight':
      console.log('RIGHT!');
      break;

    default:
      // if none of the keys above is the one pressed down on, then IGNORED! will be printed
      console.log('IGNORED!');
      break;
  }
});

{
  /* <form>
    <input type="text" name="username" placeholder="username" />
    <input type="text" name="tweet" placeholder="tweet" />
    <button>Post Tweet</button>
</form>

<h2>Tweets:</h2>
<ul id="tweets">

</ul> */
}

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
  // console.log(tweetForm.nextElementSibling.username.value);
  // console.log(tweetForm.nextElementSibling.username.tweet);
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = '';
  tweetInput.value = '';
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  newList.innerHTML = `${username.value} ${tweet.value}`;
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`-${tweet}`);
  tweetsContainer.append(newTweet);
};





const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const product = form.elements.product;
  const qty = form.elements.qty;

  listItem(product.value, qty.value);
  product.value = '';
  qty.value = '';
});

function listItem(product, qty) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<b>${product} - </b> ${qty}`;
  list.appendChild(listItem);
}





const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})


const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    h1.innerText = `Welcome ${input.value}`;
})
    


const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    h1.innerText = `Welcome, ${input.value}`;
    if(!input.value){
        h1.innerText = 'Enter Your Username';
    }
});


// event bubbling - When an event happens on an element, it first runs the handlers on it, 
// then on its parent, then all the way up on other ancestors.

{/* <style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form> */}

// on the event object there is a method called stopPropagation()
// for ex e.stopPropagation() is used to prevent bubbling, when event keeps going up 


// event delegation

// tweetsContainer.addEvenetListener('click', function(e){
// e.target.nodeName === 'LI' && e.target.remove();
// });