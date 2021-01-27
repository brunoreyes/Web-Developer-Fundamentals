const form = document.querySelector('#searchForm');
// async keyword enables the use of await
form.addEventListener('submit', async function (e) {
  e.preventDefault(); // preventing form from autorefreshing
  // console.log('Submitted');
  // console.dir(form.elements.query.value);

  // Allowing whatever the user inputs to be the searched query
  const searchTerm = form.elements.query.value;
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  console.log(response.data[0].show.image.medium);
});
