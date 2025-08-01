import { Distrito } from "./distrito";
import { Organizador } from "./organizadores";
import { Tributo } from "./tributo";

const distrito12 = new Distrito("Distrito 12", 8000, ["Arco e flecha", "Plantas medicinais", "Frutas silvestres"]);
const distrito11 = new Distrito("Distrito 11", 15000, ["Trigo", "Milho", "Fertilizantes"]);

const katniss = new Tributo("Katniss Everdeen", distrito12, 100, "Sou boa com arco e flecha.", ["Arco e flecha", "Sobrevivência"]);
const peeta = new Tributo("Peeta Mellark", distrito12, 90, "Sei camuflar.", ["Camuflagem", "Força física"]);
const rue = new Tributo("Rue", distrito11, 70, "Sou ágil e rápida.", ["Agilidade", "Escalada"]);


const organizador = new Organizador("Snow",[distrito12, distrito11]);

// Simulação dos Jogos Vorazes
console.log(`${katniss.getNome()} coleta recursos:`, katniss.coletarRecursos());
organizador.liberarAnimais(distrito12);
organizador.criarDesastre(rue);
console.log(`${rue.getNome()} saúde:`, rue.exibirSaude());
