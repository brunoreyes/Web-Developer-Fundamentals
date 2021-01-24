{/* <h1 onClick="console.log('boo')">Inline Events Suck...</h1>
<button onClick="console.log('clicked')" id="btn">Click Me</button> */}

function twist() {
    console.log('TWIST!');   
}

function shout() {
    console.log('SHOUT!');   
}

const tasButton = document.querySelector('#tas');
tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout);



{/* <h1>Click These Buttons</h1>
<p>And Prepare To Have Your Mind Blown</p>
<button id="hello">Hello</button>
<button id="goodbye">Goodbye</button>
</body> */}

const helloBtn = document.querySelector('#hello');
const goodbyeBtn = document.querySelector('#goodbye');

function hello(){
    console.log('hello');
}

function goodbye(){
    console.log('goodbye');
}

helloBtn.addEventListener('click',hello);
goodbyeBtn.addEventListener('click',goodbye);