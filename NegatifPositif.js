export function NegatifPositif(tab) {
  let gauche = 0;
  let droite = tab.length - 1;
 
  while (gauche <= droite) {
    if (tab[gauche] <= 0) {
      gauche++;
      continue;
    }
 
    if (tab[droite] > 0) {
      droite--;
      continue;
    }
 
    
    const tmp = tab[gauche];
    tab[gauche] = tab[droite];
    tab[droite] = tmp;
    droite--;
  }
 
  return tab;
}
