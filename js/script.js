const setup = document.querySelector("#setup");
const punchline = document.querySelector("#punchline");
const button = document.querySelector("#regenerate-btn");
const answerButton = document.querySelector("#answer-btn");
const darkModeButton = document.querySelector("#dark-mode-btn");
const image = document.getElementById('image');


function showAnswer() {
    punchline.classList.remove('visually-hidden')
}
answerButton.addEventListener('click', showAnswer)

function hideAnswer() {
  punchline.classList.add('visually-hidden')
}
button.addEventListener("click", hideAnswer);

function newJoke(event) {
  event.preventDefault();
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      console.log("resolved", response);
      return response.json();
    })
    .then((data) => {
      setup.innerText = `${data.setup}`;
      punchline.innerText = `- ${data.punchline}`;
    })
    .catch((err) => {
      console.log("rejected", err);
    });
}
button.addEventListener("click", newJoke);


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

function darkMode() {
    var element = document.body;
  element.classList.toggle("dark-mode");
}
darkModeButton.addEventListener('click', darkMode)