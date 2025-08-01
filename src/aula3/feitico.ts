export class Feitico{
    private nome:string;
    private tipo:string;
    private poder:number;

    setNome(nome:string):void{this.nome=nome};
    setTipo(tipo:string):void{this.tipo=tipo};
    setPoder(poder:number):void{this.poder=poder};

    getNome():string{return this.nome};
    getTipo():string{return this.tipo};
    getPoder():number{return this.poder};

    lancarFeitico():void{
        console.log(`O feitiço ${this.nome} do tipo ${this.tipo} com poder ${this.poder} foi lançado!`);
    }
}

const meuFeitiço = new Feitico()
meuFeitiço.setNome("Expelliarmus");
meuFeitiço.setTipo("Ataque");
meuFeitiço.setPoder(10);

meuFeitiço.lancarFeitico();