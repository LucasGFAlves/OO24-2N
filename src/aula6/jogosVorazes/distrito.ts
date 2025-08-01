export class Distrito {
    private nome:string;
    private recursos: string[];
    private populacao: number;

    constructor(nome: string, populacao: number, recursos: string[]) {
        this.nome = nome;
        this.populacao = populacao;
        this.recursos = recursos;
    }

    public mostrarRecursos(): string[] {
        return this.recursos;
    }

    public getNome():string{
        return this.nome;
    }
}
