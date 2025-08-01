import { Relacionavel } from "./relacionavel";

export class Pessoa implements Relacionavel {
  nome?: string;
  sobrenome?: string;
  dataNascimento?: Date;
  genero?: "masculino" | "feminino" | "outro";
  outrasRelacoes?: Relacionavel[];

  constructor( nome?: string, sobrenome?: string, dataNascimento?: Date, genero?: "masculino" | "feminino" | "outro") {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataNascimento = dataNascimento;
    this.genero = genero;
    this.outrasRelacoes = [];
  }

  descreverRelacao(): string {
    return `Pessoa: ${this.nome} ${this.sobrenome}`;
  }

  adicionarRelacao(relacao: Relacionavel): void {
    this.outrasRelacoes.push(relacao);
  }

  listarRelacoes(): string {
    let relacoesTexto = `Relações de ${this.nome} ${this.sobrenome}:\n`;
    if (this.outrasRelacoes.length > 0) {
      relacoesTexto += "  Outras Relações:\n";
      this.outrasRelacoes.forEach((relacao) => {
        relacoesTexto += `    - ${relacao.descreverRelacao()}\n`;
      });
    } else {relacoesTexto += "  Nenhuma relação adicional registrada.\n";}
    return relacoesTexto;
  }
}
