function Pessoa(nome, idade, sexo) { 
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}
/*
Pessoa.prototype = {
    constructor: Pessoa,
    getNome: function(){
        return this.nome;
    },
    getIdade: function(){
        return this.idade;
    },
    getSexo: function(){
        return this.sexo;
    }   
};
*/

// Todo objeto que criamos herda caraterísticas de Object.prototype ***

var makePessoa = function(nome, idade, sexo) {
    return {
        //Podemos definir o construtor como makePessoa, mas ele originalmente é do Object
        //constructor: makePessoa,
        nome: nome,
        idade: idade,
        sexo: sexo
    };
};

var rodrigo = new Pessoa('Rodrigo', 21, 'M');
var roberto = makePessoa('Roberto', 25, 'M');
console.log(rodrigo); // Pessoa { ... }
console.log(roberto); // Object { ... } ***
