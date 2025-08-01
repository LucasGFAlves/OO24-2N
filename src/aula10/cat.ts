import { Animal } from "./animal";

export class Cat extends Animal{

    constructor(name:string, weight:number){
        super(name, weight,'mamífero',100,100);
    }

    meow():void{
        console.log("meow meow");
    }
    
    searchResource(): void {
        console.log(`The cat ${this.name} search for resource`);
    }

    madeSound(): void {
        console.log(`The cat ${this.name} made sound!`);
    }

}

