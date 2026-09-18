export function Echanger(tableau, indice1, indice2) {
	const temporaire = tableau[indice1];

	tableau[indice1] = tableau[indice2];
	tableau[indice2] = temporaire;

	return tableau;
}
console.log(Echanger([1, 2, 3, 4], 1, 3)); // [1, 4, 3, 2]

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
console.log(Ranger([1, 0, 2, 0, 3])); // [0, 0, 2, 1, 3]

export function NombreUn(tableau) {
	let nombre = 0;

	for (let position = 0; position < tableau.length; position++) {
		if (tableau[position] === 1) {
			nombre++;
		}
	}

	return nombre;
}
console.log(NombreUn([1, 0, 2, 0, 3])); // 1
