export default function loadAbout() {
  const aboutContainerElement = document.createElement("div"),
    aboutTextContainerElement = document.createElement("div"),
    aboutTitleElement = document.createElement("h2"),
    firstTextElement = document.createElement("p"),
    secondTextElement = document.createElement("p");

  aboutContainerElement.classList.add("about-container");
  aboutTextContainerElement.classList.add("about-text-container");

  aboutTitleElement.innerText = "Contact us!";
  firstTextElement.innerText = "(111) - 111 - 111";
  secondTextElement.innerText = "email@nofake.com";

  aboutContainerElement.appendChild(aboutTextContainerElement);
  aboutTextContainerElement.append(aboutTitleElement, firstTextElement, secondTextElement);

  return aboutContainerElement;
}
