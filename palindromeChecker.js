module.exports = { palindromeChecker };
function palindromeChecker(str) {
  const wordB = str;
  const reversedWord = wordB
    .replace(/[^a-zA-Z0-9]/gi, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  const wordA = str;
  const notReversedWord = wordA
    .replace(/[^a-zA-Z0-9]/gi, "")
    .toLowerCase()
    .split("")
    .join("");

  const isPalindrome = notReversedWord === reversedWord;

  return isPalindrome;
}
