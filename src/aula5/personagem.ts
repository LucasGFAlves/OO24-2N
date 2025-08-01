import { BlocoDeMadeira } from "./blocoDeMadeira";

export class Personagem {
    private nome:string;
    private vida:number;
    private forca:number;
    private inventario:BlocoDeMadeira[];
    constructor(nome:string, vida: number, forca: number, inventario: BlocoDeMadeira[]) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.inventario = inventario;
    }
    setNome(nome:string):void{ this.nome = nome;}
    getNome():string{ return this.nome;}
    setVida(vida:number):void{ this.vida = vida; }
    getVida():number{ return this.vida;}
    setForca(forca:number):void{ this.forca = forca;}
    getForca():number{ return this.forca; }
    setInventario(bloco:BlocoDeMadeira):void{
        this.inventario.push(bloco);
    }
    getinventario():BlocoDeMadeira[]{return this.inventario;}
}