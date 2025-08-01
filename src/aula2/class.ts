export class Cat{
    //atributos
    private name:string;
    private weight:number;
    //construtor
    /*constructor(nameCat:string, weightCat:number){
        this.name = nameCat;
        this.weight = weightCat;
    }*/
    //métodos
    setName(nomeCat:string):void{
        this.name=nomeCat;
    }
    getName():string{return this.name};

    meow():void{ console.log("Meow Meow")}
    eat(quantity:number):void{
        console.log("the cat has eaten "+quantity);
    }
}

const meuGato = new Cat();
meuGato.setName("Daeny");
meuGato.meow();
meuGato.eat(200);

const segundoGato = new Cat("Sapato", 5);
segundoGato.meow();
