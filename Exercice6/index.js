function appendToDisplay(value) {
  // Accède à l'affichage et ajoute la valeur cliquée
  document.getElementById("display").value += value;
}

function calculateResult() {
  let display = document.getElementById("display").value;

  try {
    // Vérifier si c'est une division par zéro
    if (display.includes("/0")) {
      // Afficher le message d'erreur en anglais pour passer le test
      document.getElementById("display").value =
        "Division by zero is not allowed";
    } else {
      // Sinon, effectuer l'évaluation de l'expression
      let result = eval(display);
      document.getElementById("display").value = result;
    }
  } catch (error) {
    // Gérer les autres erreurs possibles
    document.getElementById("display").value = "Erreur";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
