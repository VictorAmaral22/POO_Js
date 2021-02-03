// Função autoexecutável e isolada
//nenhum método externo modifica os valores dentro dela

var pessoa = (function(nome, idade, sexo){
    
    var nome = nome; // Membros privados
    var idade = idade; // ...
    var sexo = sexo; // ...

    var getNome = function(){ // Este método está privado aqui
        return nome;
    };
    var getIdade = function(){
        return idade;
    };
    var getSexo = function(){
        return sexo;
    };
    
    /*
    return {
        getNome: getNome, // A partir do momento em que ele é chamado aqui, getNome se torna um método privilegiado pois ele tem acesso aos membros privados
        getIdade: getIdade,
        getSexo: getSexo
    };
    */

    //Para ter ainda mais segurança e não permitir que os métodos privilegiados sejam alterados...
    var metodos = {
        getNome: getNome,
        getIdade: getIdade,
        getSexo: getSexo
    };
    Object.freeze(metodos); //Congela somente os métodos e não dados, já que 'metodos' não armazena nenhum dado

    return metodos;

})('Rodrigo', 28, 'M');

console.log(pessoa.getNome()); // Rodrigo
console.log(pessoa.getIdade()); // 28
console.log(pessoa.getSexo()); // M

console.log(pessoa); // Object { getNome: function() } só tem o método privilegiado...

