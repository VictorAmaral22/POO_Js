// var pessoa = {
//     nome: "Rodrigo",
//     idade: 29,
//     sexo: "Masculino",
//     casado: false
// };
// console.log(pessoa);

//Agora, digamos que eu queira alterar uma propriedade de dados através de outra...
var pessoa = {
    nome: "Rodrigo",
    _idade: 29,
    sexo: "Masculino",
    casado: false,
    state: "Pristine",
    get idade() { // Isso é uma Propriedade de acesso
        this.state = "Dirty";
        return this._idade; // Usamos _ pois estamos acessando uma propriedade de dados através de uma de acesso..
    },
    set idade(value){ // Isso tbm
        this._idade = value;
    }
};
//pessoa.idade = 21;
//console.log(pessoa.idade); //29
// Estamos acesando na verdade o get idade, uma propriedade de acesso...

// Usando o state, podemos descobrir se uma propriedade é "virgem"
console.log(pessoa._idade); // 29
console.log(pessoa.state); // Pristine

console.log(pessoa.idade); // 29
console.log(pessoa.state); // Dirty, pois usamos a propriedade de acesso get

// É recomendado que, se tu só for alterar ou visualizar uma propriedade, não use get ou set. Caso contrário, se tu precisar fazer outras coisas com esses dados, use as propriedades de acesso.