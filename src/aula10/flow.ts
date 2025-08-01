import { Animal } from "./animal";
import { Capybara } from "./capybara";
import { Cat } from "./cat";
import { Dog } from "./dog";


function interact(animal1: Animal, animal2: Animal): void {
    console.log(`${animal1.getName()} está interagindo com ${animal2.getName()}.`);
}

const animais: Animal[] = [
    new Cat("Daeny", 5),
    new Dog("kadu", 4),
    new Capybara("Alex", 5)

];

for (let i = 0; i < 10; i++) {
    console.log(`\n--- Tempo ${i} ---`);
    animais.forEach((animal) => {
        animal.updateNeeds(-10,-10);
        if (animal.getHunger() > 80) {
            animal.searchResource();
        }
        if (Math.random() < 0.3) {
            const outroAnimal = animais[Math.floor(Math.random() * animais.length)];
            if (animal !== outroAnimal) {
                interact(animal, outroAnimal);
            }
        }
        console.log(`${animal.getName()} - Fome: ${animal.getHunger()}, Sede: ${animal.getThirst()}`);
    });
}