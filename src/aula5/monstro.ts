export class Monstro {
    private nome:string;
    private vida:number;
    private poder:number;
    private distancia:number
    constructor( nome:string, vida: number,  poder: number,  distancia: number) {
        this.nome = nome;
        this.vida = vida;
        this.poder = poder;
        this.distancia = distancia;
    }
    setNome(nome:string):void{ this.nome = nome;}
    getNome():string{ return this.nome;}
    setVida(vida:number):void{ this.vida = vida; }
    getVida():number{ return this.vida;}
    setPoder(poder:number):void{ this.poder = poder;}
    getPoder():number{ return this.poder; }
    setDistancia(distancia:number):void{ this.distancia = distancia;}
    getDistancia():number{ return this.distancia; }
}