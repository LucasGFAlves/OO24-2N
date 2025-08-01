import { Cat } from "./cat";


export class Siames extends Cat{
    public showRaceSiames():string{
        return this.showRace();
    }
}

let meuGato = new Siames("Cafezinho","Listradinho",6);
console.log(meuGato.showRaceSiames());