import { Level } from "./level";
import { survivor } from "./survivor";


let mySurvivor1 = new survivor();
let mySurvivor2 = new survivor(Level.orange);


console.log(mySurvivor1.getLevel());
console.log(mySurvivor2.getLevel());