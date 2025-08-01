//objeto de livros de romance
let romance = {
    //chave : valor
    "Os trabalhadores do Mar": "Victor Hugo",
    "A culpa é das estrelas": "John Green", 
    "Crepúsculo": "Stephanie Meyer" 
}

//for in
for(let livro in romance){
    console.log(`O autor do livro ${livro} é ${romance[livro]}`);
}
