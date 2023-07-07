const content = document.querySelector("#quote");
const author = document.querySelector("#author");

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
