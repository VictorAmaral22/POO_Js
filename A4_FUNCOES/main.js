// Funções declaradas sofrem o efeito Roisting, onde todas as chamadas vão para o topo do código...

mostraNome(); // ****

//Declaração
function mostraNome() { 
    console.log('Rodrigo declaração');
}

// Funções declaradas a partir de expressões burlam isso...

// Expressão
mostrarNome(); // Aqui não funciona

var mostrarNome = function (){
    console.log('Rodrigo expressão');
};

mostrarNome(); // Aqui functiona

// Este formato é o mais recomendado..

// ------------------

var exibeNome = function(nome, sobrenome) {
    // Com arguments podemos acessar os valores passados em uma função..
    var qtd = arguments.length;
    console.log(arguments.legnth);
    var nomeCompleto = '';

    while(qtd > 0){
        nomeCompleto += " " + arguments[qtd--];
        qtd--;
    }

    console.log(nomeCompleto);
};

exibeNome('Victor','Tavares','Amaral');