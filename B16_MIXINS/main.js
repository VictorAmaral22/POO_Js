function Pessoa(nome, idade, sexo) {
    if(this instanceof Pessoa){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    } else {
        return new Pessoa(nome, idade, sexo);
    }

}

var rodrigo = Pessoa("Rodrigo", 21, "M"); // Undefined, por causa do new que tá faltando
// Do jeito que foi arquitetada a função construtora, agora isso funciona normalmente

console.log(rodrigo instanceof Pessoa);

console.log(rodrigo);