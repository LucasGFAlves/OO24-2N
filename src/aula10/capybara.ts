import { Animal } from "./animal";

export class Capybara extends Animal{

    constructor(name:string, weight:number){
        super(name, weight,'mamífero',100,100);
    }
    
    searchResource(): void {
        console.log(`The capybara ${this.name} search for resource`);
    }

    madeSound(): void {
        console.log(`The capybara ${this.name} made sound!`);
    }

}

