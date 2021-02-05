var a = 12;
var b = 24;

a && b ? console.log('Ambos existem') : console.log('Um deles não é verdadeiro');

b = null;

a && b ? console.log('Ambos existem') : console.log('Um deles não é verdadeiro');