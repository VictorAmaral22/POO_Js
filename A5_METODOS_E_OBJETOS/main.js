var pessoa = {
    nome: 'Geralt',
    idade: 2,
    getNome: function (){
        console.log(pessoa.nome);
    }
};

pessoa.getNome(); // Geralt

var monstro = {
    nome: 'Chorabash',
    idade: 350,
    getNome: function (){
        console.log(monstro.nome);
    }
};

monstro.getNome(); // Chorabash

// Como simplificar??

var getNome = function(){
    console.log(this.nome);
};

/*  Contudo

getNome(); // undefined

*/

var pessoa = {
    nome: 'Geralt',
    idade: 2,
    getNome: getNome
};


var monstro = {
    nome: 'Chorabash',
    idade: 350,
    getNome: getNome
};

pessoa.getNome(); // Geralt
monstro.getNome(); // Chorabash

// Como fazer uma alteração no this??

//Nós passamos um parâmetro na função
var altThis = function(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    console.log(this);
};

var pessoa2 = {
    nome: 'Jaskier',
    sobrenome: 'Julian',
    idade: 2,
    getNome: altThis
};

altThis.call(pessoa2, 'Dandelion', 'Sei lá do que..');
// ou
altThis.apply(pessoa2, ['Dandelion', 'Sei lá do que..']);

//Podemos usar tbm o Bind, mas ele gera uma função nova
var getNome = altThis.bind(pessoa2, 'Dandelion', 'Sei lá do que..');
getNome();
