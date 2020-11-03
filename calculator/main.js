const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const currentDisplay = document.querySelector('.current');
const previousDisplay = document.querySelector('.previous');

numbers.forEach((num) =>
  num.addEventListener('click', (e) => {
    currentDisplay.innerText += e.target.innerText;
  })
);

let previousNumber;
let lastOperator;
let result;

operators.forEach((op) =>
  op.addEventListener('click', (e) => {
    if (e.target.innerText === '=') {
      return;
    }

    if (result) {
      switch (lastOperator) {
        case '+':
          result += Number(currentDisplay.innerText);
          break;
        case '-':
          result -= Number(currentDisplay.innerText);
          break;
        case '*':
          result *= Number(currentDisplay.innerText);
          break;
        case '/':
          result /= Number(currentDisplay.innerText);
          break;
      }
      currentDisplay.innerText = null;
      previousDisplay.innerText = result;
      previousNumber = null;
    }
    // first time calc
    if (!previousNumber) {
      previousNumber = Number(currentDisplay.innerText);
      currentDisplay.innerText = null;
      lastOperator = e.target.innerText;
      return;
    }

    switch (lastOperator) {
      case '+':
        result = previousNumber + Number(currentDisplay.innerText);
        break;
      case '-':
        result = previousNumber - Number(currentDisplay.innerText);
        break;
      case '*':
        result = previousNumber * Number(currentDisplay.innerText);
        break;
      case '/':
        result = previousNumber / Number(currentDisplay.innerText);
        break;
    }

    currentDisplay.innerText = null;
    previousDisplay.innerText = result;
    previousNumber = null;
  })
);

document.querySelector('#equal').addEventListener('click', () => {
  previousDisplay.innerText = result;
});
