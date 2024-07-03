module.exports = (num1, operator, num2) => {
  const number1 = Number(num1);
  const number2 = Number(num2);
  if (isNaN(number1) || isNaN(number2)) {
    return "Invalid numbers.";
  }

  switch (operator) {
    case "+":
      return `${number1} + ${number2} = ${number1 + number2}`;
    case "-":
      return `${number1} - ${number2} = ${number1 - number2}`;
    case "*":
      return `${number1} * ${number2} = ${number1 * number2}`;
    case "/":
      if (number2 === 0) {
        return "Division by 0 is not possible.";
      }
      return `${number1} / ${number2} = ${number1 / number2}`;
    default:
      return "Operation not possible. Use only '+' ('%2B'), '-', '*' or '/'.";
  }
};
