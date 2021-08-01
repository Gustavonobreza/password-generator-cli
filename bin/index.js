#!/usr/bin/env node

const { readFileSync } = require("fs");

const { writeSync: clip } = require("clipboardy");
const { program } = require("commander");

const { generate } = require("./password");
const { DEFAULT_PASS_SIZE, FULL } = require("./constants");
const { savePassFile } = require("./savePass");
const { log, colours } = require("./console");

const { version } = JSON.parse(readFileSync("package.json"));

program.version(version, "-v, --version", "output the current version");

console.log("\t Version:", version);

program
  .command("easy <provider>")
  .alias("e")
  .option("-l, --length <length>", "size of password", `${DEFAULT_PASS_SIZE}`)
  .option("-s, --save", "save password")
  .action((provider, { save, length }) => {
    // Size
    {
      length = Number(length);
      if (!length || length < 0) {
        length = DEFAULT_PASS_SIZE;
      }
    }

    const pass = generate.withoutSymbols(length);

    logger(pass);

    save && savePassFile(pass, provider);
  });

program
  .command("medium <provider>")
  .alias("m")
  .option("-l, --length <length>", "size of password", `${DEFAULT_PASS_SIZE + 5}`)
  .option("-s, --save", "save password")
  .action((provider, { save, length }) => {
    // Size
    {
      length = Number(length);
      if (!length || length < 0) {
        length = DEFAULT_PASS_SIZE + 5;
      }
    }

    const pass = generate.withSymbols(length);

    logger(pass);

    save && savePassFile(pass, provider);
  });

program
  .command("strong <provider>")
  .alias("s")
  .option("-l, --length <length>", "size of password", `${DEFAULT_PASS_SIZE + 10}`)
  .option("-s, --save", "save password")
  .action((provider, { save, length }) => {
    // Size
    {
      length = Number(length);
      if (!length || length < 0) {
        length = DEFAULT_PASS_SIZE + 10;
      }
    }

    const pass = generate.withSymbols(length);

    logger(pass);

    save && savePassFile(pass, provider);
  });

program
  .command("extreme <provider>")
  .alias("ex")
  .option("-l, --length <length>", "size of password", `${DEFAULT_PASS_SIZE + 20}`)
  .option("-s, --save", "save password")
  .action((provider, { save, length }) => {
    // Size
    {
      length = Number(length);
      if (!length || length < 0) {
        length = DEFAULT_PASS_SIZE + 20;
      }
    }

    const pass = generate.withSymbols(length);

    logger(pass);

    save && savePassFile(pass, provider);
  });

program.parse();

function logger(pass) {
  if (typeof pass !== "string") {
    throw new TypeError("Password need to be a string");
  }

  log("\t", colours.bg.cyan, "Password ->", colours.reset, colours.fg.cyan, pass, "\n");

  clip(pass);

  log(colours.reset, "\b\t", colours.fg.yellow, colours.bg.crimson, "🦄 Copied to clipboard! 🌈");
}
