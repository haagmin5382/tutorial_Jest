const bundle = require("./main/double");

test("2 * 2 to be 4", () => {
  expect(bundle.double(2)).toBe(4);
});

test("result to be hello world", () => {
  expect(bundle.printText("hello world")).toBe("result : hello world");
});
