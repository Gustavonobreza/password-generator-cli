# 🦄 Password Generator CLI

Node.js cli to generate passwords

## Installation

```shell
npm i -g cli-password-generator
```

## Usage

```shell
passgen
```

## Exemple (Very strong password)
```bash
passgen ex github
#  n)egi+3hAb3//*1A|BUg?s@E8JTe_gz
```

## Options

```text
Usage: index [options] [command]

Options:
  -v, --version                    Output the current version
  -h, --help                       Display help for command

Commands:
  easy|e [options] <provider>      Weak password
  medium|m [options] <provider>    Medium level password
  strong|s [options] <provider>    Strong password
  extreme|ex [options] <provider>  Very strong password
  help [command]                   display help for command
```
