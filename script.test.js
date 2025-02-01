const capitalize = require("./script.js");

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
