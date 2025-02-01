const { capitalize, reverseString, calculator } = require("./script.js");

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

describe("calculator", () => {
	test("adding two integers", () => {
		expect(calculator.add(5, 4)).toBe(9);
	});

	test("subtracting two integers", () => {
		expect(calculator.sub(3, 4)).toBe(-1);
	});

	test("multiplying two integers", () => {
		expect(calculator.mul(3, 4)).toBe(12);
	});

	test("dividing two integers", () => {
		expect(calculator.div(5, 4)).toBe(1.25);
	});

	test("dividing two real numbers", () => {
		expect(calculator.div(4.23, 1.33)).toBeCloseTo(3.18);
	});
});


