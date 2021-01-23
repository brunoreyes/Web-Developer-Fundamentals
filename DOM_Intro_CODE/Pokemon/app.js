// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement('div'); // creating a conatiner for each pokemon
  pokemon.classList.add('pokemon'); // adding the class association pokemon to the container div
  const label = document.createElement('span'); // creating a span to display each pokemon's #
  label.innerText = `#${i}`; // looping the pokemon number insive the span element
  const newImg = document.createElement('img'); // creating an image element for each poke
  // looping the base url & adding the #.png to grab the unique pokemon src & appending it to the img element
  newImg.src = `${baseURL}${i}.png`;

  pokemon.appendChild(newImg); // adding the img to the indivudual pokemon div
  pokemon.appendChild(label); // adding the label to the indivudual pokemon div
  container.appendChild(pokemon); // adding the individual pokemon container and all it's children to the big #container
}
