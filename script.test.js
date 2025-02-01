const { capitalize, reverseString } = require("./script.js");

describe("capitalize", () => {
	const testCases = [
		{ input: "hamza", expected: "Hamza" },
		{ input: "a", expected: "A" },
		{ input: "", expected: "" },
		{ input: "hamza chera", expected: "Hamza Chera" },
	];

	test.each(testCases)(
		"given $input as input, returns $expected",
		({ input, expected }) => {
			expect(capitalize(input)).toBe(expected);
		}
	);
});

describe("reverseString", () => {
	const testCases = [
		{ input: "hamza", expected: "azmah" },
		{ input: "aya", expected: "aya" },
		{ input: "adam smith", expected: "htims mada" },
		{ input: "", expected: "" },
	];

	test.each(testCases)(
		"given $input as input, returns $expected",
		({ input, expected }) => {
			expect(reverseString(input)).toBe(expected);
		}
	);
});
