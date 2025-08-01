export class BlocoDeMadeira {
    private tipo:string;
    private durabilidade:number;
    
    constructor(tipo: string, durabilidade: number) {
        this.tipo = tipo;
        this.durabilidade = durabilidade;
    }
    setTipo(tipo:string):void{
        this.tipo = tipo;
    }
    getTipo():string{
        return this.tipo;
    }
    setDurabilidade(durabilidade:number):void{
        this.durabilidade = durabilidade;
    }
    getDurabilidade():number{
        return this.durabilidade;
    }
}