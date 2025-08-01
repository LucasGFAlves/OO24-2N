import { Distrito } from "./distrito";
import { Tributo } from "./tributo";

export class Organizador {
    private nome:string;
    private distritos:Distrito[];
    constructor(nome:string, distritos: Distrito[]) { 
        this.nome = nome;
        this.distritos = distritos;
    }

    public liberarAnimais(distrito: Distrito): void {
        console.log(`Animais selvagens liberados no ${distrito.getNome()}!`);
    }

    public criarDesastre(tributo:Tributo): void {
        console.log(`Desastre natural atingiu ${tributo.getNome()}!`);
        tributo.sofrerDano(50);
    }
}
