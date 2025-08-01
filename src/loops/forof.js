/*let listaNum = [14,57,92,86,43,29];

for(let posicao of listaNum){
    console.log(posicao);
    console.log(listaNum.indexOf(posicao))
}

let frase = ["Palavras","são","uma","inesgotável",
"fonte","de","magia"];

for(let palavras of frase){
    console.log(frase.indexOf("magia"));
}

let maiorNum =0;
for(let num of listaNum){
    if(maiorNum<num){
        maiorNum = num;
    }
}
console.log(maiorNum);
*/

//array de palavras
let listaPalavras = ["Oi", "sumido", "tudo", "bem?","Saudades"];
//variavel que somara todas as posicoes
let frase = "";
for(let palavra of listaPalavras){
    frase += palavra + "/";
}
console.log(frase);

let numeros = [11, 15, 18, 14, 12, 13];
let pares=0;
for(let numero of numeros){
    if(numero % 2 == 0){
        pares += numero;
    }
}
console.log(pares);