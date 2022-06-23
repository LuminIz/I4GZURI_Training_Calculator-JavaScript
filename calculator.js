const operator = prompt ("Enter operator (+, -, *, or /)");
const firstNumber = parseFloat (prompt("Enter the first number"));
const secondNumber = parseFloat (prompt ("Enter the second number"));

let result;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Invalid input.Please enter a number.");
} else {
    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else  if (operator === "/") {
        result = firstNumber / secondNumber;
    } else {
        alert("Invalid operator. Must be one of +, -, *, or /.")
    }     
}

alert(firstNumber + " " + operator + " " + secondNumber + " equals " + result + ".");