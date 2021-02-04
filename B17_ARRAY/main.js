var carros = ['Vectra', 'Gol', 'Centra'];
carros.pop(); // Retira a última posição
console.log(carros); // Vectra, Gol

// Portanto, se por meio de uma variável for possível acessar métodos, nós temos um objeto

carros.push('L200'); // Adiciona um valor na última posição
console.log(carros); // Vectra, Gol, L200

carros.shift(); // Retira o valor da primeira posição
console.log(carros); // Gol, L200

carros.unshift('Uno'); // Adiciona um valor na primeira posição
console.log(carros); // Uno, Gol, L200

var carro = carros.splice(1, 1);
console.log(carro); // Gol
//carros.splice(1, 1); // Retira o gol

var getCarro = function(posicao, qtd){
    var carros = ['Vectra', 'Gol', 'Centra'];

    return carros.splice(posicao, qtd); // aqui é o SPLICE
};

var novosCarros = getCarro(1, 1);
console.log(novosCarros);

// ---

novosCarros = carros.slice(); // aqui é o SLICE

novosCarros.forEach(function(item, index){
    console.log(item, index);
    // Uno 0
    // L200 1
});