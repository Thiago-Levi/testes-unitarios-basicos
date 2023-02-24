const { palindromeChecker } = require("./palindromeChecker");

describe("palindromeChecker", () => {
  it("1 - should return true", () => {
    expect(palindromeChecker("A man, a plan, a canal. Panama")).toBe(true);
  });

  it("2 - should return true", () => {
    expect(palindromeChecker("_eye")).toBe(true);
  });

  it("3 - should return true", () => {
    expect(palindromeChecker("race car")).toBe(true);
  });

  it("4 - should return false", () => {
    expect(palindromeChecker("almostomla")).toBe(false);
  });
});
