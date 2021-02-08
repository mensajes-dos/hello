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

log(`${chalk.bgRed.bold(` Felipe `)} - 

${italic(`Los mamotretos de los mamotretos`)}

Egresado de cierto lugar.

${twitter}${twitterurl}
`);

console.clear();
const error = chalk.bold.red.inverse;
const warning = chalk.keyword('orange').bold.inverse;
const success = chalk.green.bold.inverse;
const info = chalk.blue.bold.inverse;

log(`
${success(` Sucess! `)} Mensaje de éxito.
${info(` Info `)} Mensaje de info.
${warning(` Warning `)} Mensaje de advertencia.
${error(` Error `)} Mensaje de Error.
`);
