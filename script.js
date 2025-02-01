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

module.exports = capitalize;
