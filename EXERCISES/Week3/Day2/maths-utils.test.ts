/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from "./maths-utils";

describe("When calling the Add function", () => {
  it("should add two integers", () => {
    // Arrange: Setup variables here

    // Act: Call function here

    // Assert: Check results here
    expect(add(1, 2)).toBe(3);
  });

  it("will add strings and numbers", () => {
    // Arrange: Setup variables here

    // Act: Call function here

    // Assert: Check results here
    expect(add("shi", 123)).toBe("shi123");
  });
});

describe("When calling the safeMultiply function", () => {
  it("should multiply two integers", () => {
    // Arrange: Setup variables here
    // Hint: happy case
    // Act: Call function here
    // Assert: Check results here
    expect(safeMultiply(3, 2)).toEqual(6);
  });

  it("will throw an error when parameter a is bad", () => {
    // Arrange: Setup variables here
    // Act: Call function here + Assert: Check results here
    // Hint: add a wrapper function
    // Assert
    // Hint: use "toThrow()"
    expect(() => {
      safeMultiply("abc", 3);
    }).toThrow("Parameters a and b must be numeric but got a='abc' and b='3'");
  });

  it("will throw an error when parameter b is bad", () => {
    // Arrange: Setup variables here
    // Act: Call function here
    // Assert: Check results here
    // You can either do this with a wrapper function and .toThrow, or you can try using a try/catch block
    expect(() => {
      safeMultiply(3, "abc");
    }).toThrow("Parameters a and b must be numeric but got a='3' and b='abc'");
  });

});
