// testing a simple math operation
test("adds 5 + 5 to equal 10", () => {
  expect(5 + 5).toBe(10); // toBe is a matcher
});

// Testing a simple array operation
test("array contains admin", () => {
  const roles = ["admin", "user", "guest"];
  expect(roles).toContain("admin"); // toContain is a matcher
});

// testing a simple string operation
test("converts a string to uppercase", () => {
  const str = "web 340 node.js";
  const uppercase = str.toUpperCase();
  expect(uppercase).toBe("WEB 340 NODE.JS");
});

// testing a simple object operation
test("object assignment", () => {
  const book = { title: "Pragmatic Node.js" };
  book.author = "Professor Krasso";
  expect(book).toEqual({
    title: "Pragmatic Node.js",
    author: "Professor Krasso"
  });
});

// testing a simple boolean operation
test("boolean assignment", () => {
  const is2024 = true;
  expect(is2024).toBeTruthy();
});

// testing a custom function
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("Inputs must be a number");
  }
  return a + b;
}

test("adds 2 + 2 to equal 4", () => {
  expect(add(2, 2)).toBe(4);
});

test("throws an error when a non-number is used", () => {
  expect(() => add("2", 2)).toThrow("Inputs must be a number");
});