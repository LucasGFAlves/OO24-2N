import { BlocoDeMadeira } from "./blocoDeMadeira";

export class Mundo {
    private listaBlocos:BlocoDeMadeira[];
    constructor( blocos: BlocoDeMadeira[]) {
        this.listaBlocos = blocos;
    }
    setListaBloco(blocos:BlocoDeMadeira[]):void{
        this.listaBlocos = blocos;
    }
    getListaBloco():BlocoDeMadeira[]{
        return this.listaBlocos;
    }
    setBloco(bloco:BlocoDeMadeira):void{
        this.listaBlocos.push(bloco);
    }
}