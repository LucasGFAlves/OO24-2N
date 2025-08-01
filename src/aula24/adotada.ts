import { Pessoa } from "./pessoa";

export class Adotada extends Pessoa {
    constructor(nome: string, sobrenome: string, dataNascimento: Date, genero: 'masculino' | 'feminino' | 'outro') {
        super(nome, sobrenome, dataNascimento, genero);
    }

    descreverRelacao(): string {
        return `Pessoa Adotada: ${this.nome} ${this.sobrenome}`;
    }
}
