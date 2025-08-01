export class Cat{
    public name:string;
    protected race:string;
    private weight:number;
 
    constructor(nameCat:string, raceCat:string, weightCat:number){
        this.name = nameCat;
        this.race = raceCat;
        this.weight = weightCat;
    }
    //métodos
    public setName(nomeCat:string):void{
        this.name=nomeCat;
    }
    public getName():string{return this.name};

    public meow():void{ 
        console.log("Meow Meow");
        console.log(this.showRace());
        console.log(this.revealWeight());
    }
    public eat(quantity:number):void{
        console.log("the cat has eaten "+quantity);
    }
    protected showRace():string{return this.race};
    private revealWeight():number{return this.weight};
}

const minhaGata = new Cat("Daeny","SRD",5);
minhaGata.meow();
//minhaGata.showRace();
//minhaGata.revealWeight();

