function mostraNome(){
    return 'Rodrigo';
}

var teste = (typeof mostraNome);
if( teste === 'function' ){
    var recebeNome = mostraNome();
} else {
    console.log('mostraNome não é uma função...');
}

console.log(teste); // function

function showName(){
    return 'João';
}

if(showName instanceof Function){
    var nome = showName();
}

console.log(nome); // João

// instanceof não é muito bom para Arrays
// use .isArray()
var carros = ['gol', 'corolla', 'fusion'];

if(Array.isArray(carros)){
    console.log(carros);
} else {
    console.log(typeof carros);
}