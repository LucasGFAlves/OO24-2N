import { Pessoa } from "./pessoa";
import { Relacionavel } from "./relacionavel";

export class Conjuge implements Relacionavel {
    pessoa: Pessoa;
    dataCasamento?: Date;

    constructor(pessoa?: Pessoa , dataCasamento?: Date ) {
        this.pessoa = pessoa;
        this.dataCasamento = dataCasamento;
    }

    descreverRelacao(): string {
        const casamentoInfo = this.dataCasamento ? ` (Casados desde: ${this.dataCasamento.toLocaleDateString()})` : '';
        return `Cônjuge: ${this.pessoa.nome} ${this.pessoa.sobrenome}${casamentoInfo}`;
    }
}
