// Créez votre fonction ici
function calculate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);

  let result;
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
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        return "Division by zero is not allowed";
      }
      break;

    default:
      return "Invalid operator";
  }
  return result;
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

export default calculate;
