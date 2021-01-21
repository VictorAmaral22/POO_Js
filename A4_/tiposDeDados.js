//  TIPOS PRIMITIVOS

var idade = 18;
var sexo = 'f';
var nome;
var existe = true;
var endereco = null;

/*
console.log(typeof idade); //Type Number
console.log(typeof sexo); //Type String
console.log(typeof nome); //Type Undefined
console.log(typeof existe); //Type Boolean
console.log(typeof endereco); //Type Object wow..
//Alguns argumentam que é um bug, porémm, é considerado um objeto vazio.

console.log(endereco == null); //True
console.log(!!idade); //True
console.log(!!nome); //False
console.log(!!endereco); //False
//Tudo, com excessão de undefined e null, é true..
*/

//  TIPOS DE REFERÊNCIA
var pessoa = new Object();
console.log(typeof pessoa); // object

var pessoa2 = {
    nome: 'Cleitin', 
    idade: 350, 
    sexo: 'Deus'
};

var mostraNome = new Function('console.log("Rodrigo");');
mostraNome();

