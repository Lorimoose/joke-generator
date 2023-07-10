const content = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#regenerate-btn");
const image = document.getElementById('image');

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
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(response => {
    console.log("resolved", response)
    image.src = response.message
  })
    .catch((err) => {
      console.log("rejected", err);
    });
}
button.addEventListener("click", newImg);