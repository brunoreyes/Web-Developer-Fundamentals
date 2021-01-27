const form = document.querySelector('#searchForm');
// async keyword enables the use of await
form.addEventListener('submit', async function (e) {
  e.preventDefault(); // preventing form from autorefreshing
  // console.log('Submitted');
  // console.dir(form.elements.query.value);

  // Allowing whatever the user inputs to be the searched query
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm, isFunny: 'colt' } };
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${searchTerm}`,
    config
  );
  // accessing data response and getting the image url of the show
  // console.log(response.data[0].show.image.medium);
  makeImages(response.data);
  form.elements.query.value = ''; // emptying the input field
});

const makeImages = (shows) => {
  for (let result of shows) {
    // console.log(result);
    // if an image for the tv show exist
    if (result.show.image) {
      const img = document.createElement('IMG');
      // replaced "response" with "result" bc we changed the name of the var
      img.src = result.show.image.medium; // making the src of the var img == image url response
      document.body.append(img);
    }
  }
};
