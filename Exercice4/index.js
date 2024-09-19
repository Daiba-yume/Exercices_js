// Sélectionne le bouton avec l'id 'myButton'
var button = document.getElementById("myButton");

// Ajoute un gestionnaire d'événement pour le clic
button.addEventListener("click", function () {
  // Sélectionne le paragraphe avec l'id 'message'
  var messageParagraph = document.getElementById("message");

  // Met à jour le texte du paragraphe pour afficher le message
  messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});
