function capitalize(string) {
	const words = string.split(" ");
	words.forEach((word, index) => {
		const characters = word.split("");
		if (characters[0]) {
			characters[0] = characters[0].toUpperCase();
		}

		words[index] = characters.join("");
	});

	return words.join(" ");
}

function reverseString(string) {
	return string.split("").reverse().join("");
}

const calculator = {
	add: (op1, op2) => {
		return op1 + op2;
	},
	sub: (op1, op2) => {
		return op1 - op2;
	},
	mul: (op1, op2) => {
		return op1 * op2;
	},
	div: (op1, op2) => {
		return op1 / op2;
	},
};

function findShiftedIndex(currentIndex, shiftFactor) {
	for (let i = 0; i < shiftFactor; i++) {
		if (currentIndex < 25) {
			currentIndex++;
		} else {
			currentIndex = 0;
		}
	}

	return currentIndex;
}

function caesarCipher(string, shiftBy) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	const characters = string.split("");

	characters.forEach((char, index) => {
		const isUpperCase = char == char.toUpperCase() ? true : false;
		const orderInAlph = alphabet.indexOf(char.toLowerCase());

		if (orderInAlph != -1) {
			const newCharIndex = findShiftedIndex(orderInAlph, shiftBy);
			characters[index] = isUpperCase
				? alphabet[newCharIndex].toUpperCase()
				: alphabet[newCharIndex];
		}
	});

	return characters.join("");
}



module.exports = { capitalize, reverseString, calculator, caesarCipher };
