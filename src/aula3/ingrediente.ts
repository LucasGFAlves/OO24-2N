export class ingrediente{
    private nome:string;
    private quantidade:number;
    private efeito:string;

    constructor(nome:string,quantidade:number,efeito:string){
        this.nome=nome;
        this.quantidade=quantidade;
        this.efeito=efeito;
    }

    setNome(nome:string):void{this.nome=nome};
    setQuantidade(quantidade:number):void{this.quantidade};
    setEfeito(efeito:string):void{this.efeito=efeito};

    getNome():string{return this.nome};
    getQuantidade():number{return this.quantidade};
    getEfeito():string{return this.efeito};

    exibirIngrediente():void{console.log(`A quantidade de ${this.quantidade} ingredientes de ${this.nome} com efeito ${this.efeito}`)}
}