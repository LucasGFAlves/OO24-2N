import { Animal } from "./animal";

export class Dog extends Animal{

    constructor(name:string, weight:number){
        super(name, weight,'mamífero',100,100);
    }

    bark():void{
        console.log("Au au");
    }
    
    searchResource(): void {
        console.log(`The dog ${this.name} search for resource`);
    }

    madeSound(): void {
        console.log(`The dog ${this.name} made sound!`);
    }

}

