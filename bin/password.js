const { FULL, LETTERS, NUMBERS } = require("./constants");

function randomPass(size, chars = FULL) {
  let pass = "";
  const numSort = () => Math.floor(Math.random() * chars.length);

  while (pass.length <= size) {
    const num = numSort();
    pass += chars[num];
  }

  return pass;
}

exports.generate = {
  withSymbols(size) {
    size = Number.parseInt(size);

    if (!size) {
      throw new Error("Size in not defined!!!");
    }

    return randomPass(size, FULL);
  },
  withoutSymbols(size) {
    size = Number.parseInt(size);

    if (!size) {
      throw new Error("Size in not defined!!!");
    }

    return randomPass(size, [...LETTERS, ...NUMBERS]);
  },
};
