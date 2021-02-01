var pessoa = {
    nome: "Rodrigo",
    _idade: 29,
    _sexo: "Masculino",
    casado: false,
    state: "Pristine",
    get idade() {
        this.state = "dirty";
        return this._idade;
    },
    set idade(value) {
        this._idade = value;
    }
};

for( propriedade in pessoa ){
    console.log(propriedade);
}
// nome
//_idade
//sexo
//casado
//state
//idade *** getters e setters aparecem desse jeito

//ENUMERABLE
Object.defineProperty(pessoa, "idade", {
    enumerable: false // Desabilita o acesso à propriedade 'idade'
});

for( propriedade in pessoa ){
    console.log(propriedade);
}
// nome
//_idade
//sexo
//casado
//state

// CONFIGURABLE
//Object.defineProperty(pessoa, 'nome', {
//    configurable: false
//});

delete pessoa.nome;
console.log(pessoa); //{ nome: ..., ...} não excluiu o nome

//Object.defineProperty(pessoa, 'nome', {
//    configurable: true //Isso dá erro, pois a propriedade não pode ser configurada
//});

//Porém, o seu valor pode ser alterado.
pessoa.nome = "João";
console.log(pessoa.nome); //João

//Podemos tbm definir junto do enumerable e configurable, o valor da propriedade e se ela pode ser reescrita
Object.defineProperty(pessoa, 'nome', {
    configurable: false,
    enumerable: false,
    value: 'Roberto',
    writable: false
});

console.log("------------------------------------------");
/////////////////////////////////////////////////////////


Object.defineProperty(pessoa, "sexo", {
    get: function(){ //Aqui nós estamos definindo os parâmetros do get após a criação do objeto pessoa
        return this._sexo;
    },
    set: function(value) {
        this._sexo = value;
    }
});

var sexo = pessoa.sexo;
console.log(sexo);

pessoa.sexo = "Feminino";
console.log(pessoa.sexo);