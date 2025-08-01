import { Adotada } from "./adotada";
import { ArvoreGenealogica } from "./arvoreGenealogica";
import { Conjuge } from "./conjuge";
import { Pessoa } from "./pessoa";

console.log('--- Construindo a Árvore Genealógica ---');

const arvoreFamilia = new ArvoreGenealogica();

// Geração 0 (Raiz)
const avoMaterno = new Pessoa('Joaquim', 'Silva', new Date('1950-01-15'), 'masculino');
arvoreFamilia.setRaiz(avoMaterno);

const avoMaterna = new Pessoa('Maria', 'Pereira', new Date('1952-03-20'), 'feminino');
avoMaterno.adicionarRelacao(new Conjuge(avoMaterna, new Date('1975-06-10')));
avoMaterna.adicionarRelacao(new Conjuge(avoMaterno, new Date('1975-06-10'))); // Adiciona a relação de volta

// Geração 1
const pai = new Pessoa('Carlos', 'Silva', new Date('1978-07-22'), 'masculino');
const mae = new Pessoa('Ana', 'Sousa', new Date('1980-04-10'), 'feminino');

arvoreFamilia.adicionarFilho(avoMaterno, pai); // Pai é filho do avô materno
// A mãe é uma relação do pai, não um "filho" direto na árvore genealógica de Joaquim
pai.adicionarRelacao(new Conjuge(mae, new Date('2005-09-01')));
mae.adicionarRelacao(new Conjuge(pai, new Date('2005-09-01'))); // Adiciona a relação de volta

const tia = new Pessoa('Sofia', 'Silva', new Date('1976-11-05'), 'feminino');
arvoreFamilia.adicionarFilho(avoMaterno, tia); // Tia é filha do avô materno

const primo = new Pessoa('Lucas', 'Nunes', new Date('2000-02-28'), 'masculino');
// Cônjuge da tia
tia.adicionarRelacao(new Conjuge(new Pessoa('Fernando', 'Nunes', new Date('1975-01-01'), 'masculino'), new Date('1999-07-15')));
// Para o primo ser filho da tia, o cônjuge do pai precisa estar no contexto para adicionar o filho
// Aqui, vamos adicionar o primo diretamente como filho da tia para simplificar a estrutura da árvore.
arvoreFamilia.adicionarFilho(tia, primo);

// Geração 2
const eu = new Pessoa('Mariana', 'Silva', new Date('2008-12-01'), 'feminino');
const irmao = new Pessoa('Pedro', 'Silva', new Date('2010-06-25'), 'masculino');
const irmaAdotada = new Adotada('Julia', 'Silva', new Date('2012-09-18'), 'feminino'); // Pessoa Adotada!

// Aqui, o 'pai' é o Carlos Silva
arvoreFamilia.adicionarFilho(pai, eu);
arvoreFamilia.adicionarFilho(pai, irmao);
arvoreFamilia.adicionarFilho(pai, irmaAdotada);


// --- Testando os Métodos ---
console.log('\n--- Testando Métodos ---');

const pessoaEncontrada = arvoreFamilia.encontrarPessoa('Mariana Silva');
if (pessoaEncontrada) {
    console.log(`Encontrado: ${pessoaEncontrada.nome} ${pessoaEncontrada.sobrenome}`);
    console.log(pessoaEncontrada.listarRelacoes());
} else {
    console.log('Pessoa não encontrada.');
}

const avoEncontrado = arvoreFamilia.encontrarPessoa('Joaquim Silva');
if (avoEncontrado) {
    console.log(`\nRelações do ${avoEncontrado.nome} ${avoEncontrado.sobrenome}:`);
    console.log(avoEncontrado.listarRelacoes());
}

const tiaEncontrada = arvoreFamilia.encontrarPessoa('Sofia Silva');
if (tiaEncontrada) {
    console.log(`\nRelações da ${tiaEncontrada.nome} ${tiaEncontrada.sobrenome}:`);
    console.log(tiaEncontrada.listarRelacoes());
}

const irmaAdotadaEncontrada = arvoreFamilia.encontrarPessoa('Julia Silva');
if (irmaAdotadaEncontrada) {
    console.log(`\nDetalhes da ${irmaAdotadaEncontrada.nome} ${irmaAdotadaEncontrada.sobrenome}:`);
    console.log(irmaAdotadaEncontrada.descreverRelacao()); // Chamada polimórfica
}


console.log('\n--- Níveis e Profundidade da Árvore ---');

const niveis = [
    { pessoa: avoMaterno, nome: 'Joaquim Silva' },
    { pessoa: pai, nome: 'Carlos Silva' },
    { pessoa: mae, nome: 'Ana Sousa' },
    { pessoa: eu, nome: 'Mariana Silva' },
    { pessoa: irmao, nome: 'Pedro Silva' },
    { pessoa: irmaAdotada, nome: 'Julia Silva' },
    { pessoa: primo, nome: 'Lucas Nunes' },
];

niveis.forEach(item => {
    const nivel = arvoreFamilia.getNivel(item.pessoa);
    console.log(`Nível de ${item.nome}: ${nivel !== undefined ? nivel : 'Não encontrado diretamente como filho na árvore (pode ser relação)'}`);
});

console.log(`\nProfundidade da Árvore: ${arvoreFamilia.getProfundidade()}`);


console.log('\n--- Representação Visual da Árvore ---');
arvoreFamilia.imprimirArvore();


