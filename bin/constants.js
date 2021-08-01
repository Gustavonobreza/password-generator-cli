const lettersMinor = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const lettersMajor = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "|", "}", "{", "[", "]", "?",  "/", "-", "="];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

module.exports = {
  DEFAULT_PASS_SIZE: 10,
  FULL: [...numbers, ...lettersMinor, ...lettersMajor, ...symbols],
  LETTERS: [...lettersMinor, ...lettersMajor],
  LETTERS_MINOR: lettersMinor,
  LETTERS_MAJOR: lettersMajor,
  SYMBOLS: symbols,
  NUMBERS: numbers
};
