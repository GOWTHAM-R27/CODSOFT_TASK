let input = "";
let result = document.getElementById("result");

function handleButtonClick(event) {
  const button = event.target;
  const buttonValue = button.textContent;

  if (buttonValue === "=") {
    try {
      input = eval(input);
    } catch (error) {
      input = "Error";
    }
  } else if (buttonValue === "C") {
    input = "";
  } else {
    input += buttonValue;
  }

  result.textContent = input;
}

const numberButtons = document.querySelectorAll(".calculator-numbers button");
numberButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
