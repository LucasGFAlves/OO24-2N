import { Distrito } from "./distrito";

export class Tributo {
    private nome:string;
    private saude: number;
    protected distrito:Distrito;
    private segredo: string;
    private habilidades: string[];

    constructor(nome: string, distrito:Distrito, saude: number, segredo: string, habilidades: string[]) {
        this.nome = nome;
        this.saude = saude;
        this.segredo = segredo;
        this.distrito = distrito;
        this.habilidades = habilidades;
    }

    public coletarRecursos(): string[] | string {
        if (this.distrito.mostrarRecursos().length > 0) {
            return this.distrito.mostrarRecursos();
        } else {
            return "Não há recursos disponíveis.";
        }
    }

    public sofrerDano(dano: number): void {
        this.saude -= dano;
        if (this.saude <= 0) {
            console.log(`${this.nome} morreu!`);
        }
    }

    public exibirSaude(): number {
        return this.saude;
    }

    protected revelarDistrito(): string {
        return this.distrito.getNome();
    }

    getNome():string{
        return this.nome;
    }
}
