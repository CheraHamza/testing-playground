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

module.exports = { capitalize, reverseString, calculator };
