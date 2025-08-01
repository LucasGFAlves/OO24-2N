import { ingrediente } from "./ingrediente";

export class pocao{
    private nome:string;
    private ingredientes:ingrediente[]=[];
    private efeito:string=":";

    setNome(nome:string):void{this.nome=nome};
    setIngrediente(ingrediente:ingrediente):void{
        this.ingredientes.push(ingrediente);
        this.efeito += " "+ingrediente.getEfeito();
    };
    
    setEfeito(efeito:string):void{this.efeito=efeito};

    getNome():string{return this.nome};
    getIngredientes():ingrediente[]{return this.ingredientes};
    getEfeito():string{return this.efeito};

    exibirIngredientes():void{
        console.log("Os ingredientes da poção são: ")
        this.ingredientes.forEach(ingrediente => {
            ingrediente.exibirIngrediente();
        })
    };

    prepararPocao():void{
        console.log(`A poção ${this.nome} foi preparada com sucesso!`);
        console.log(`O efeito da ${this.nome} é ${this.efeito}`);
    };
}

const mandragora = new ingrediente("Mandrágora", 2, "Cura");
const belladona = new ingrediente("Belladona", 1, "Visão noturna");
const acônito = new ingrediente("Acônito", 3, "Força");

const pocaoCura = new pocao();
pocaoCura.setNome("Poção de Cura");
pocaoCura.setIngrediente(mandragora);
pocaoCura.setIngrediente(belladona);
pocaoCura.setIngrediente(acônito);

pocaoCura.exibirIngredientes();
pocaoCura.prepararPocao();