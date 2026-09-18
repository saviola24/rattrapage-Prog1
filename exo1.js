export function NegatifPositif(tableau) {
  let gauche = 0;
  let droite = tableau.length - 1;

  while (gauche < droite) {
    while (gauche < droite && tableau[gauche] <= 0) {
      gauche++;
    }

    while (gauche < droite && tableau[droite] > 0) {
    }

    if (gauche < droite) {
      const temporaire = tableau[gauche];
      tableau[gauche] = tableau[droite];
      tableau[droite] = temporaire;
    }
  }

  return tableau;
}
console.log(NegatifPositif([-1, 2, -3, 4, -5])); // [-1, -3, -5, 4, 2]
console.log(NegatifPositif([1, -2, 3, -4, 5])); // [-2, -4, 3, 1, 5]    