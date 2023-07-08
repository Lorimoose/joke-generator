const content = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#regenerate-btn");
const image = document.querySelector("image");

function newQuote(event) {
  event.preventDefault();
  fetch("https://api.quotable.io/random")
    .then((response) => {
      console.log("resolved", response);
      return response.json();
    })
    .then((data) => {
      content.innerText = `"${data.content}"`;
      author.innerText = `-${data.author}`;
    })
    .catch((err) => {
      console.log("rejected", err);
    });
}
button.addEventListener("click", newQuote);

function newImg() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      console.log("resolved", response);
      return response.json();
    })
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      image.src = imageUrl;
    })
    .catch((err) => {
      console.log("rejected", err);
    });
  }
button.addEventListener("click", newImg);