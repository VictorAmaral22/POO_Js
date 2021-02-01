// FUNÇÕES CONSTRUTORAS

function Pessoa(nome, idade, sexo) { 
    // A primeira letra é convencionalmente maiúscula, para lembrar que devemos usar a palavra new para construir essa função.

    this._nome = nome;
    this.idade = idade;
    this.sexo = sexo;

    Object.defineProperties(this, {
        _nome: {
            enumerable: true,
            configurable: true,
            writable: true
        },
        nome: {
            get: function(){
                return this._nome;
            },
            set: function(value){
                this._nome = value;
            }
        }
    });
    Object.preventExtensions(this); //  Assim, não podemos fazer nenhuma alteração no objeto
}

var rodrigo = new Pessoa("Rodrigo", 19, "Masculino");
console.log(rodrigo);   // Pessoa {nome: 'Rodrigo', idade: 19, sexo: 'Masculino'}
console.log(rodrigo instanceof Pessoa);    // true
console.log(rodrigo.constructor === Pessoa);   // true

rodrigo.nome = 'José';  // Com o writable true, o nome fica José. Com o writable false, o nome fica Rodrigo

for(propriedade in rodrigo){
    console.log(propriedade+": "+rodrigo[propriedade]);
}
