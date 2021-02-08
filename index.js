#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

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

console.log(`Felipe Guerrero - 

Los mamotretos de los mamotretos

Egresado de cierto lugar.`);
