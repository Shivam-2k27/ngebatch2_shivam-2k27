import { addToArray } from "./animal-array";
/*
Run with
> npm install
> npm test animal-array
*/

//Tasks
// - Make every test in the first describe have the item 'Early Bird' at the start of the array
// - Make sure the array is empty after each test

//This is a test that shows you how the function works and can be tested
/* it("I can add an item to an existing array", () => {
  //ARRANGE

  const itemToAdd = "Timely Hippo";
  const expectedResult = ["Timely Hippo"];

  //ACT
  const result = addToArray(animalArray, itemToAdd);

  //ASSERT
  expect(result).toEqual(expectedResult);
}); */

describe("Every test has early bird at the start of the array", () => {
  let animalArray = [];

  beforeEach(() => {
    const itemToAdd = "Early bird";
    const expectedResult = ["Early bird"];
    const result = addToArray(animalArray, itemToAdd);
    /* expect(result).toBe(expectedResult); */
  });

  it("Adds the item Timely Hippo to an existing array that has Early Bird in it", () => {
    expect(addToArray(animalArray, "Timely Hippo")).toEqual([
      "Early bird",
      "Timely Hippo",
    ]);
  });

  it("Adds Timely Hippo and Regular Rat to an existing array that has Early Bird in it", () => {
    addToArray(animalArray, "Timely Hippo");
    expect(addToArray(animalArray, "Regular Rat")).toEqual([
      "Early bird",
      "Timely Hippo",
      "Regular Rat",
    ]);
  });
  afterEach(() => {
    animalArray = [];
  });
});
