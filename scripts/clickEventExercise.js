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
const tweetForm = document.querySelector('#tweets');

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
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`-${tweet}`);
  tweetsContainer.append(newTweet);
};