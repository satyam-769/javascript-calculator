var buttons = document.querySelectorAll('.button');
var display = document.querySelector('#display');
let operand1 = 0;
let operand2 = null;
let operator = null;

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    console.log('value', value);
    if (value === 'ac') {
      display.innerText = '';
      operator = null;
      operand1 = 0;
      operand2 = null;
    } else if(value === '+') {
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
      operator = '+';
    } else if(value === '-') {
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
      operator = '-';
    } else if(value === 'x') {
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
      operator = 'x';
    } else if(value === '/') {
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
      operator = '/';
    } else if(value === '%') {
      operand1 = parseFloat(display.textContent);
      display.innerText = '';
      operator = '%';
    } else if (value === '='){
      operand2 = parseFloat(display.textContent);
      console.log('operand2=====', parseFloat(display.textContent))
      if (operator === '+') {
        console.log('+ ===', operand1 + operand2)
        display.innerText = operand1 + operand2;
      } else if (operator === '-') {
        console.log('- ===', operand1 - operand2)
        display.innerText = operand1 - operand2;
      } else if (operator === 'x') {
        display.innerText = operand1 * operand2;
      } else if (operator === '/') {
        console.log('/ ===', operand1 / operand2)
        display.innerText = parseFloat(operand1 / operand2);
      } else if (operator === '%') {
        display.innerText = operand1 * operand2 / 100;
      }
      operator = null;
      operand1 = 0;
      operand2 = null;
    } else {
      display.innerText += value;
    }
  });
}