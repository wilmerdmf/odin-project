export default function loadHome() {
  const homeContainerElement = document.createElement("div"),
    homeTextContainerElement = document.createElement("div"),
    firstTextElement = document.createElement("p"),
    secondTextElement = document.createElement("p");

  homeContainerElement.classList.add("home-container");
  homeTextContainerElement.classList.add("home-text-container");

  firstTextElement.innerText = `Welcome, hungry diners and seekers of culinary delights! In this magical place where flavors intertwine and aromas whisper sweetly in your ear, we welcome you to our humble culinary sanctuary.`;

  secondTextElement.innerText = `Are you ready to embark on a sensory journey that will challenge your taste buds and make you wonder if you've been living in a gastronomic cave all this time? Well, you're in the right place. Here, we don't just feed you, we feed you with style!`;

  homeContainerElement.appendChild(homeTextContainerElement);
  homeTextContainerElement.append(firstTextElement, secondTextElement);

  return homeContainerElement;
}
