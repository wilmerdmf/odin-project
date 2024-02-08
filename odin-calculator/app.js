const displayElement = document.getElementById("display"),
  buttonElements = document.querySelectorAll("button[meta-operator]");

let output = "0",
  clickCounter = 0,
  previousInput = "",
  currentInput = "",
  operator = "",
  result = "";

const updateDisplay = () => {
  displayElement.value = output;
};

const resetCalculator = () => {
  output = "0";
  clickCounter = 0;
  previousInput = "";
  currentInput = "";
  operator = "";
  result = "";
  displayElement.classList.remove("is-active");
  displayElement.classList.remove("is-done");
  buttonElements.forEach((button) => button.classList.remove("is-active"));
  updateDisplay();
};

const getResult = () => {
  const num1 = parseFloat(previousInput),
    num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
  }

  if (isNaN(result)) result = `SyntaxError`;
};

const calculate = () => {
  getResult();

  output = result.toString();
  currentInput = output;
  previousInput = "";
  operator = "";
  clickCounter = 0;
  displayElement.classList.add("is-active");
  displayElement.classList.add("is-done");
  updateDisplay();
};

const continueOperation = () => {
  getResult();

  output = result.toString();
  previousInput = output;
  currentInput = "";
  updateDisplay();
};

document.addEventListener("click", (e) => {
  const value = e.target.id;

  if (e.target.hasAttribute("meta-ac")) resetCalculator();

  if (e.target.hasAttribute("meta-equal")) {
    if (!currentInput || !previousInput) {
      resetCalculator();
      result = "SyntaxError";
      displayElement.value = result;
      displayElement.classList.remove("is-done");
      return;
    }

    calculate();
  }

  if (e.target.hasAttribute("meta-number")) {
    if (displayElement.classList.contains("is-active") && previousInput === "") resetCalculator();

    if (result === "SyntaxError") resetCalculator();

    if (clickCounter >= 2) clickCounter--;

    if (output === "0" || previousInput === "") {
      output = value;
    } else {
      output += value;
    }

    currentInput += value;
    displayElement.value = currentInput;
    buttonElements.forEach((button) => button.classList.remove("is-active"));
    displayElement.classList.remove("is-done");
  }

  if (e.target.hasAttribute("meta-operator")) {
    clickCounter++;

    if (clickCounter >= 2 && !e.target.classList.contains("is-active")) {
      buttonElements.forEach((button) => button.classList.remove("is-active"));

      e.target.classList.add("is-active");
      clickCounter = 2;
    }

    if (clickCounter >= 2) {
      continueOperation();
      operator = e.target.id;
      return;
    }

    e.target.classList.add("is-active");
    previousInput = currentInput;
    currentInput = "";
    operator = value;
    displayElement.value = "0";
    displayElement.classList.remove("is-done");
  }

  if (e.target.hasAttribute("meta-del")) {
    output = output.slice(0, -1);
    currentInput = currentInput.slice(0, -1);
    displayElement.value = currentInput;
    displayElement.classList.remove("is-done");

    if (!displayElement.value) displayElement.value = "0";
  }
});
