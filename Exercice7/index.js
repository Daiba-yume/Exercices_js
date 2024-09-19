function convertToBinary() {
  // Récupère la valeur entrée dans le champ de saisie
  //et supprime les espaces en trop
  let decimalInput = document.getElementById("decimalInput").value.trim();
  console.log("Input Value:", decimalInput);

  // Convertit la valeur décimale saisie en entier
  let decimalNumber = parseInt(decimalInput, 10);
  console.log("Parsed Number:", decimalNumber);

  let binaryNumber = ""; // Variable pour stocker le résultat en binaire

  // Vérifie si la saisie est invalide (non numérique, vide, ou négative)
  if (
    isNaN(decimalNumber) ||
    decimalInput === "" ||
    decimalNumber < 0 ||
    !/^\d+$/.test(decimalInput)
  ) {
    binaryNumber = ""; // Si la saisie est invalide,result empty
  } else {
    binaryNumber = decimalNumber.toString(2);
  }

  console.log("Binary Result:", binaryNumber);

  // Affiche le résultat binaire dans l'élément avec l'id "binaryResult"
  let resultElement = document.getElementById("binaryResult");
  resultElement.textContent = binaryNumber
    ? `Représentation binaire : ${binaryNumber}` // Affiche le binaire si valide
    : ""; // Si le résultat est vide, on n'affiche rien
}
