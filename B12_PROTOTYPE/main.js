function Pessoa(nome, idade, sexo) { 
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    /* Modo mais simples
    this.getNome = function(){
        return this.nome;
    };
    */
}

/*
//Com prototype
Pessoa.prototype.getNome = function(){
    return this.nome;
};
Pessoa.prototype.getIdade = function(){
    return this.idade;
};
Pessoa.prototype.getSexo = function(){
    return this.sexo;
};
*/

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

var rodrigo = new Pessoa('Rodrigo', 21, 'M');
var joao = new Pessoa('João', 18, 'M');

console.log(rodrigo.getNome(), rodrigo.getIdade(), rodrigo.getSexo());
console.log(joao.getNome(), joao.getIdade(), joao.getSexo());

console.log(rodrigo instanceof Pessoa); // True
console.log(rodrigo.constructor === Pessoa); // False
// Isso porque mesmo sendo uma instância de Pessoa, Pessoa não é o construtor de Rodrigo
