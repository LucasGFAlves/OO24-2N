export class Animal {
    protected name : string;
    protected weight: number;
    protected species:string;
    protected hunger:number;
    protected thirst:number;

    constructor(nameConst:string, weightConst:number, speciesConst:string, hungerConst:number, thirstConst:number){
        this.name=nameConst;
        this.weight=weightConst;
        this.species=speciesConst;
        this.hunger = hungerConst;
        this.thirst=thirstConst;
    }

    getName():string{
        return this.name;
    }

    getHunger():number{
        return this.hunger;
    }

    getThirst():number{
        return this.thirst;
    }

    eat(quantity:number):void{
        console.log("The animal has eaten: "+ quantity);//concatenação
        console.log(`The animal has eaten: ${quantity}`); //template
    }
    searchResource():void{
        console.log("The animal searching for resources");
    };
    madeSound(): void{
        console.log("The animal made sound");
    }
    mover(): void{
        console.log("The animal moved");
    }
    updateNeeds(hunger:number, thirst:number):void{
        this.hunger+=hunger;
        this.thirst+=thirst;
    }

}