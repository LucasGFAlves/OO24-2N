export class EspadaDeDiamante {
    private dano:number;
    private durabilidade:number;
    constructor(dano: number, durabilidade: number) {
        this.dano = dano;
        this.durabilidade = durabilidade;
    }
    setDano(dano:number):void{
        this.dano = dano;
    }
    getDano():number{
        return this.dano;
    }
    setDurabilidade(durabilidade:number):void{
        this.durabilidade = durabilidade;
    }
    getDurabilidade():number{
        return this.durabilidade;
    }
}