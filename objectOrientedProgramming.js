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
