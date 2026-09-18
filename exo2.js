export function Echanger(tableau, indice1, indice2) {
	const temporaire = tableau[indice1];

	tableau[indice1] = tableau[indice2];
	tableau[indice2] = temporaire;

	return tableau;
}

export function Ranger(tableau) {
	let positionZero = 0;

	for (let position = 0; position < tableau.length; position++) {
		if (tableau[position] === 0) {
			Echanger(tableau, positionZero, position);
			positionZero++;
		}
	}

	return tableau;
}

export function NombreUn(tableau) {
	let nombre = 0;

	for (let position = 0; position < tableau.length; position++) {
		if (tableau[position] === 1) {
			nombre++;
		}
	}

	return nombre;
}
