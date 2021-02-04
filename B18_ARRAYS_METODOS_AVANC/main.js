var carros = ['Vectra', 'Gol', 'Centra'];
var resultado = carros.filter(function(value){
    return value == 'Gol';
});

console.log(resultado); // ["Gol"]

/*
carros.forEach(function(item) {
    if(item == 'Gol'){
        console.log('Gol');
        var carro = Array(item);
        console.log(carro);
    }
});
*/

var result = carros.some(function(value){
    return value == 'Camaro';
});
console.log(result); // False

var result2 = carros.find(function(value){
    return value == 'Gol';
});
console.log(result2); // Gol

var numeros = [10, 15, 20];

var res = numeros.reduce(function(total, numero){
    return total + numero;
});
console.log(res); // 45