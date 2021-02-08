#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const italic = chalk.italic
const twitter = chalk.hex(`#1da1f2`).bold.inverse(' Twitter ');
const twitterurl = chalk.dim(' https://twitter.com/guerretmx');

welcome({
  title: pkgJSON.name,
  tagLine: `Bienvenidos al Himalaya`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#fadc00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`${chalk.bgRed.bold(` Felipe Guerrero `)} - 

${italic(`Los mamotretos de los mamotretos`)}

Egresado de cierto lugar.

${twitter}${twitterurl}
`);

console.clear();
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const success = chalk.green;
const info = chalk.blue;

log();
log(error('Error!'));
log(warning('Warning!'));
log(success('Success!'));
log(info('Info:'));
log();
