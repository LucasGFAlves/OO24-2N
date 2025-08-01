let soma =0;
const numeros = [65,44, 12, 4]
/*
//declaração de função
function myFunction(item){
    soma += item;
}
numeros.forEach(myFunction);
console.log(soma);
*/
/*
numeros.forEach(myFunction => {
    soma += myFunction;
})

numeros.forEach(function(valor){
    soma += valor;
});


console.log(soma);*/

const veiculos = ['carro','moto', 'bicicleta']

veiculos.forEach((element, index, array) => {
    console.log(`O elemento ${element} tem indice
    ${index}`);
    console.log("O array é: ", array);
})

