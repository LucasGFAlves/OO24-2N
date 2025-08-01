export class User{
    private name:string;
    private CPF:string;
    private email:string;
    private password:string;

    constructor(nameConst:string, CPFConst:string, emailConst:string, passConst:string){
        this.name = nameConst;
        this.CPF = CPFConst;
        this.email = emailConst;
        this.password = passConst;
    }

    getName():string{
        return this.name;
    }
    setName(nameSet:string):void{
        this.name = nameSet;
    }
    getCPF():string{
        return this.CPF;
    }
    setCPF(CPFSet:string):void{
        this.name = CPFSet;
    }
    getEmail():string{
        return this.email;
    }
    setEmail(emailSet:string):void{
        this.name = emailSet;
    }
    getPass():string{
        return this.password;
    }
    setPass(passSet:string):void{
        this.name = passSet;
    }
}