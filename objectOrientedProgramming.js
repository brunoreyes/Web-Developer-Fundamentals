//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"

// converts rgb colors to hexidecimal (hex) color in a factory function,
// which makes an object that automatically has a hex and rgb method and
// stores the rgb value as values stored on the rgb object
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"

const navColor = new Color('carrot', [230, 126, 34]);
const logoColor = new Color('emerald', [46, 204, 113]);

('rgb(244, 54, 23)');
('rgba(244, 54, 23, 0.9)'); // a is the alpha channel for opactity
// giving us the transaparency from 0 to 1 of a color
('#76FF32'); // hex
('hsl(180, 50%, 30%)'); // hue, saturation, lightness

navColor.rgb(); // "rgb (230, 126, 34)"
navColor.hex(); // "#e67e22"

// changing the opacity of a color
document.querySelectorAll('h1')[1].style.backgroundColor = navColor.rgba(0.5);

// changing the color to the opposite color hue across the color wheel
// from orange to blue
document.querySelectorAll('h1')[1].style.backgroundColor = navColor.opposide();

document.querySelectorAll(
  'h1'
)[1].style.backgroundColor = navColor.fullSaturation();

const request = new XMLHttpRequest(); // makes an object with a bunch of
// properties and methods already backed in

console.dir(document.quertSelector('h1'));

// "hi".slice === "bye".slice

function Color(r, g, b) {
  // const object = {} this happens when key word "new" is used
  this.r = r; // this refers to a newly created object
  this.g = g; // objects r,g, and b will be linked into any new instance of the Color function
  this.b = b;
  console.log(this); // this refers to the window, the gobal scope or nearest object (the window)
  // unless the keyword "new" is used like below
}

// Using the new keyword creates a blank JS object:
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as this context;
// Returns this if the function doesn't return its own object.
new Color(255, 40, 100);

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// do not use arrow functions when utilizing keyword "this", because it behaves differently
Color.prototype.rgba = function () {};

const color1 = new Color(40, 255, 60);

const color2 = new Color(0, 0, 0);

// To create a class it must use the class keyword and constructor keyword within it
// always capitalize class name
class Color { // this refers to the instance of the object
    // A constructor executes whenever a new class Color is created
    constructor(r, g, b, name) {
        console.log('Inside Constructor');       
        console.log(r, g, b, name); 
        this.r = r; 
        this.g = g; 
        this.b = b;
        this.name = name 
        console.log(r, g, b, name); 
    }
    greet() { // exectued by doing c1.greet() 
        return `HELLO FROM ${this.name}`
    }
    innerRGB(){
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    };
    
    outerRGB(){
        return `rgb(${this.innerRGB()})`;
    };
    
    rgba(a=1){
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}


const c1 = new Color(255, 67, 89, 'tomato'); // constructor for class Color
                                            // runs automatically when instantiated like here
const white = new Color(255, 255, 255, 'white');

document.body.style.backgroundColor = white.rgba(.5);
