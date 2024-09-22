let form = document.querySelector("#formID");
let userInput = document.querySelector("#movieID");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let userChar = userInput.value;
  let searchTerm = { params: { q: userChar } };
  let res = await axios.get(`https://api.tvmaze.com/search/shows`, searchTerm);
  makeImages(res.data);
  userInput.value = "";
});

// Search through the images in the website
let makeImages = function (shows) {
  for (let result of shows) {
    if (result.show.image) {
      let image = document.createElement("img");
      image.src = result.show.image.medium;
      document.body.append(image);
      //   console.log(res.data[0].show.image.medium);
    }
  }
};

// remove the images search before a new search
form.addEventListener("submit", function () {
  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    img.remove();
  }
});
