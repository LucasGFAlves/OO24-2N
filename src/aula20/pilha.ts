class Pilha<T>{
    private elements:T[]=[];
    //coloca item na pilha
    push(item:T):void{
        this.elements.push(item);
    }
    //apaga o ultimo item colocado na pilha
    pop():T|undefined{
        return this.elements.pop();
    }
    peek():T | undefined{
        return this.elements[this.elements.length-1]
    }
    isEmpty() : boolean{
        return this.elements.length === 0;
    }
    size() : number{
        return this.elements.length
    }
    clear(): void{
        this.elements = [];
    }
}

const minhaPilha = new Pilha<number>();
minhaPilha.push(1);
minhaPilha.push(2);
minhaPilha.push(3);

console.log(minhaPilha.pop());//3
console.log(minhaPilha.peek());//2
console.log(minhaPilha.size());//2
console.log(minhaPilha.isEmpty());//false
minhaPilha.clear();
console.log(minhaPilha.isEmpty());//true
