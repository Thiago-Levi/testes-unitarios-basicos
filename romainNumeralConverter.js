module.exports = { convertToRoman };

function convertToRoman(num) {
  const romainCases = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let converted = "";
  const decimal = Object.keys(romainCases).reverse();

  decimal.forEach((key) => {
    while (key <= num) {
      converted += romainCases[key];
      num -= key;
    }
  });

  return converted;
}
