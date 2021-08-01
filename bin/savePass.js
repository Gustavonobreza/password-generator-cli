const { readFileSync, writeFileSync } = require("fs");
const { log, colours } = require("./console");

const raw = JSON.parse(readFileSync("passes.json"));

function savePassFile(pass, provider) {
  raw.data.push({
    pass,
    provider,
    date: new Date().toLocaleString(),
  });

  writeFileSync("passes.json", JSON.stringify(raw));
  console.log("\t", colours.fg.green, colours.bright, "\tSaved!", colours.reset);
}

module.exports = { savePassFile };
