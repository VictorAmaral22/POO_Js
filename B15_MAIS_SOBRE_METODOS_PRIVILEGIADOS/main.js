var pessoa = (function(nome, idade, sexo){
    var nome = nome;
    var idade = idade;
    var sexo = sexo;

    //  Como funciona com o GET
    var getNome = function(){
        return nome;
    };
    var getIdade = function(){
        return idade;
    };
    var getSexo = function(){
        return sexo;
    };

    //  Como funciona com o SET
    var setNome = function(value){
        nome = value;
    };
    var setIdade = function(value){
        idade = value;
    };
    var setSexo = function(value){
        sexo = value;
    };

    var metodos = {
        //  GET
        getNome: getNome,
        getIdade: getIdade,
        getSexo: getSexo,
        //  SET
        setNome: setNome,
        setIdade: setIdade,
        setSexo: setSexo
    };

    // ***
    Object.defineProperties(metodos, {
        getNome: {
            enumerable: false
        },
        getIdade: {
            enumerable: false
        },
        getSexo: {
            enumerable: false
        },
        setNome: {
            enumerable: false
        },
        setIdade: {
            enumerable: false
        },
        setSexo: {
            enumerable: false
        }
    });
    Object.freeze(metodos);

    return metodos;
})('Rodrigo', 28, 'M');

for(propriedade in pessoa) {
    console.log(propriedade); // Os métodos privilegiados ainda aparecem...
    // getNome
    // getIdade
    // getSexo
}

pessoa.setNome('Tereza');
pessoa.setSexo('F');
console.log(pessoa.getNome()+", "+pessoa.getSexo());
