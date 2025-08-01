export class Node<T>{
    protected value:T;
    protected children: Node<T>[]=[];

    constructor(valueConst?:T){
        this.value = valueConst;
    }
    getValue():T{
        return this.value;
    }

    addChildren(NodeT:Node<T>){
        this.children.push(NodeT);
    }

    getChildren():Node<T>[]{
        return this.children;
    }

}

const rootNode = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");

rootNode.addChildren(nodeB);
rootNode.addChildren(nodeC);

console.log(rootNode.getChildren());
console.log(nodeB.getChildren());