const { convertToRoman } = require("./romainNumeralConverter");
describe("convertToRomain", () => {
  it("should return the string X", () => {
    expect(convertToRoman(10)).toBe("X");
  });

  it("should return the string X", () => {
    expect(convertToRoman(83)).toBe("LXXXIII");
  });

  it("should return the string X", () => {
    expect(convertToRoman(12)).toBe("XII");
  });

  it("should return the string X", () => {
    expect(convertToRoman(3999)).toBe("MMMCMXCIX");
  });
});
