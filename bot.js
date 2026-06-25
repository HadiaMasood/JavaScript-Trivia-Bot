const botName = "hadia";
const botLocation = "pakistan";
const favoriteLanguage = "HTML";

const messages = [
  "Hello! I'm your coding fun fact guide!",
  `My name is ${botName} and I live in ${botLocation}.`,
  `My favorite programming language is ${favoriteLanguage}.`,
  `${favoriteLanguage} is the standard markup language for creating web pages.`,
  `${favoriteLanguage} describes the structure of a web page semantically.`,
  `${favoriteLanguage} elements are the building blocks of every website.`,
  `It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`
];

function startTrivia() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  let index = 0;

  function showMessage() {
    if (index >= messages.length) {
      return;
    }

    const paragraph = document.createElement("p");
    paragraph.textContent = messages[index];
    output.appendChild(paragraph);
    index += 1;

    setTimeout(showMessage, 1000);
  }

  showMessage();
}

document.getElementById("startButton").addEventListener("click", startTrivia);
