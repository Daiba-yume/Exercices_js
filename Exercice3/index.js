// Créez votre fonction ici
function calculateAverage(numbers) {
  // Vérifie si le paramètre est défini et est un tableau
  if (!Array.isArray(numbers)) {
    return "No numbers to calculate average";
  }

  // Vérifie si le tableau est vide
  if (numbers.length === 0) {
    return "No numbers to calculate average";
  }

  // Calcule la somme des nombres
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Calcule la moyenne
  const average = sum / numbers.length;

  return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
