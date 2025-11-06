function Start() {
  // Bot details
  var botName = "hadia";
  var botLocation = "pakistan";
  var favoriteLanguage = "HTML";

  // Greeting message
  console.log("Hello! I'm your coding fun fact guide!");

  // Introduce the bot
  console.log("My name is " + botName + " and I live on " + botLocation + ".");
  console.log("My favorite programming language is " + favoriteLanguage + ".");

  // Fun facts
  let codingFact = favoriteLanguage + " is the standard markup language for documents designed to be displayed in a web browser.";
  console.log(codingFact);

  codingFact = favoriteLanguage + " describes the structure of a web page semantically and originally included cues for its appearance.";
  console.log(codingFact);

  codingFact = favoriteLanguage + " elements are the building blocks of HTML pages.";
  console.log(codingFact);

  // Farewell message
  console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".");
}
