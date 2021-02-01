var pessoa = {};

Object.defineProperties( pessoa, {
    _nome: {
        value: 'Rodrigo',
        enumerable: true,
        configurable: false,
        writable: true
    },
    _sexo: {
        value: "M",
        enumerable: true,
        configurable: true,
        writable: true
    },
    _idade: {
        value: 16,
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
    },
    sexo: {
        get: function(){
            return this._sexo;
        },
        set: function(value){
            this._sexo = value;
        }
    }

});

var atributos = Object.getOwnPropertyDescriptor(pessoa, '_nome');
console.log(atributos); // Aparece todos os atributos

var atributo = Object.getOwnPropertyDescriptor(pessoa, '_nome');
console.log(atributo.value); //Rodrigo

//

var atributo = Object.getOwnPropertyDescriptor(pessoa, 'nome');
console.log(atributo.value); //Object {enumerable: false, configurable: false}

/*

Object.preventExtensions(pessoa); // Impede que ocorram alterações no objeto
delete pessoa._nome;
delete pessoa.nome;
console.log(pessoa);

console.log(Object.isExtensible(pessoa));

Object.seal(pessoa);
console.log(Object.isSealed(pessoa));
pessoa.endereco = "Rua Tal não sei oq";
console.log(pessoa); //Não houve alterações

*/

Object.freeze(pessoa);
pessoa.nome = 'José';
console.log(Object.isFrozen(pessoa)); //Também não sofre alteração