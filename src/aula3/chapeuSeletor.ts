export class chapeuSeletor{
    private casa:string;

    selecionarCasa():void{
        let casaAleatroia:number;
        casaAleatroia = Math.floor(Math.random() * 4+1);
        console.log(casaAleatroia);
        if(casaAleatroia==1){this.casa = "Grifinória"}
        else if(casaAleatroia==2){this.casa = "Lufa-Lufa"}
        else if(casaAleatroia==3){this.casa = "Corvinal"}
        else if(casaAleatroia==4){this.casa = "Sonserina"}
        else {console.log("Valor inválido")};
    }

    exibirCasa():void{
        console.log(`A casa selecionado foi ${this.casa}`)
    }
}

const minhaCasa = new chapeuSeletor();
minhaCasa.selecionarCasa();
minhaCasa.exibirCasa();
