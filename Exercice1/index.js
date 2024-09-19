//votre code ici

export default pairNumbers;

function pairNumbers(min, max) {
  let numbers = "";
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      if (numbers !== "") {
        numbers += ",";
      }
      numbers += i;
    }
  }
  return numbers;
}
