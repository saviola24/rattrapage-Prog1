import { Echanger } from './exo2.js';
import { NombreUn } from './exo2.js';

export function triLignes(matrice) {
	for (let position = 0; position < matrice.length - 1; position++) {
		let ligneAvecLeMoinsDeUn = position;

		for (let ligne = position + 1; ligne < matrice.length; ligne++) {
			if (NombreUn(matrice[ligne]) < NombreUn(matrice[ligneAvecLeMoinsDeUn])) {
				ligneAvecLeMoinsDeUn = ligne;
			}
		}

		if (ligneAvecLeMoinsDeUn !== position) {
			Echanger(matrice, position, ligneAvecLeMoinsDeUn);
		}
	}

	return matrice;
}
console.log(triLignes([[1, 0, 2], [0, 0, 3], [1, 1, 1]]));