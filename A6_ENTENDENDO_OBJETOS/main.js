// A natureza dos objetos em Js é dinâmica...

var pessoa = {};
console.log(pessoa); // mostra um objeto vazio...

pessoa.nome = "Rodrigo";
console.log(pessoa); // Object {nome: "Rodrigo"}
// Adicionamos propriedades assim então

pessoa.idade = 29;
pessoa.sexo = "Masculino";
console.log(pessoa); // Object {nome: "Rodrigo", idade: 29, sexo: "Masculino"}

// Mas como remover uma Key?
// delete pessoa.idade;
console.log(pessoa); // Object {nome: "Rodrigo", sexo: "Masculino"}
// Delete é um operador nativo

pessoa.casado = false; // Falsy - um falso negativo

if(pessoa.casado) {
    delete pessoa.casado;
}
console.log(pessoa);

// Como contornar ent?
if("casado" in pessoa) { // Deve-se usar string na propriedade
    delete pessoa.casado;
}
console.log(pessoa);

// Cuidado, pois o in checa a existência de uma propriedade não só num objeto, mas também nos seus protótipos(do qual o objeto herdou a propriedade)

// Podemos usar outra função
console.log(pessoa.hasOwnProperty("casado")); // True ou False
// Já esse, procura somente no objeto que o chama (pessoa)


// Usando For in em um objeto
for(propriedade in pessoa){
    //console.log(propriedade); //Retorna os nomes das propriedades
    //console.log(pessoa[propriedade]); //Retorna os atributos
    console.log(propriedade+" - "+pessoa[propriedade]);
}

// -- 
var i, size;
var propriedades = Object.keys(pessoa);
console.log(propriedades); // ["nome", "idade", "sexos"]

for(i = 0, size=propriedades.length; i < size ; i++){
    console.log(propriedades);
    console.log(pessoa[propriedades[i]]);
}
console.log(propriedades);

// Algumas propriedades são inumeráveis
console.log(pessoa.propertyIsEnumerable("length")); // False
console.log(pessoa.propertyIsEnumerable("idade")); // True