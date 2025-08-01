import { Pessoa } from "./pessoa";
import { Node } from "./tree";

export class ArvoreGenealogica extends Node<Pessoa> {
    raiz: Node<Pessoa> | null;

    constructor() {
        super();
        this.raiz = null;
    }

    setRaiz(pessoa: Pessoa): void {
        if (this.raiz === null) {
            this.raiz = new Node<Pessoa>(pessoa);
            console.log(`Definindo ${pessoa.nome} ${pessoa.sobrenome} como a raiz da árvore.`);
        } else {
            console.warn(`A árvore já possui uma raiz (${this.raiz.getValue().nome} ${this.raiz.getValue().sobrenome}). Não foi possível adicionar ${pessoa.nome} como nova raiz.`);
        }
    }

    
    // Adiciona um filho a um pai existente na árvore
    // Ambos pai e filho são do tipo Pessoa, mas precisamos encontrar o Node do pai
    adicionarFilho(paiPessoa: Pessoa, filhoPessoa: Pessoa): void {
        const paiNode = this.encontrarNodePessoa(paiPessoa.nome + ' ' + paiPessoa.sobrenome);

        if (paiNode) {
            const filhoNode = new Node<Pessoa>(filhoPessoa);
            paiNode.addChildren(filhoNode);
            console.log(`Adicionado ${filhoPessoa.nome} como filho de ${paiPessoa.nome}.`);
        } else {
            console.error(`Erro: O pai ${paiPessoa.nome} ${paiPessoa.sobrenome} não foi encontrado na árvore para adicionar o filho.`);
        }
    }

    // Busca um Node<Pessoa> pelo nome (busca em profundidade - DFS)
    // Este método auxiliará encontrar a pessoa "pai" para adicionar filhos
    encontrarNodePessoa(nomeCompleto: string): Node<Pessoa> | undefined {
        if (!this.raiz) {
            return undefined;
        }

        const stack: Node<Pessoa>[] = [this.raiz]; // Pilha para busca em profundidade

        while (stack.length > 0) {
            const current = stack.pop()!;
            if (`${current.getValue().nome} ${current.getValue().sobrenome}` === nomeCompleto) {
                return current;
            }
            // Adiciona os filhos do Node<Pessoa> na pilha para continuar a busca
            for (let i = current.getChildren().length - 1; i >= 0; i--) {
                stack.push(current.getChildren()[i]);
            }
        }
        return undefined; // Pessoa não encontrada
    }

    // Busca uma Pessoa pelo nome (Retorna o valor Pessoa, não o Node)
    encontrarPessoa(nomeCompleto: string): Pessoa | undefined {
        const node = this.encontrarNodePessoa(nomeCompleto);
        return node ? node.getValue() : undefined;
    }

    // --- Métodos para Desafio: Nível e Profundidade ---

    // Calcula o nível de uma pessoa (0 para a raiz, 1 para seus filhos, etc.)
    getNivel(pessoa: Pessoa): number | undefined {
        if (!this.raiz) {
            return undefined;
        }
        if (pessoa === this.raiz.getValue()) {
            return 0; // Raiz está no nível 0
        }

        const queue: { node: Node<Pessoa>, level: number }[] = [{ node: this.raiz, level: 0 }];

        while (queue.length > 0) {
            const { node, level } = queue.shift()!;
            for (const filhoNode of node.getChildren()) {
                if (filhoNode.getValue() === pessoa) {
                    return level + 1;
                }
                queue.push({ node: filhoNode, level: level + 1 });
            }
        }
        return undefined; // Pessoa não encontrada
    }

    // Calcula a profundidade da árvore (o maior nível de um nó folha)
    getProfundidade(): number {
        if (!this.raiz) {
            return -1; // Árvore vazia
        }

        let maxProfundidade = 0;

        const findMaxDepth = (node: Node<Pessoa>, currentDepth: number) => {
            maxProfundidade = Math.max(maxProfundidade, currentDepth);
            for (const filhoNode of node.getChildren()) {
                findMaxDepth(filhoNode, currentDepth + 1);
            }
        };

        findMaxDepth(this.raiz, 0);
        return maxProfundidade;
    }

    // Método para imprimir a árvore (opcional, para visualização)
    imprimirArvore(node: Node<Pessoa> = this.raiz!, prefix: string = '', isLast: boolean = true): void {
        if (!node) return;

        console.log(`${prefix}${isLast ? '└── ' : '├── '}${node.getValue().nome} ${node.getValue().sobrenome}`);

        for (let i = 0; i < node.getChildren().length; i++) {
            this.imprimirArvore(node.getChildren()[i], prefix + (isLast ? '    ' : '│   '), i === node.getChildren().length - 1);
        }
    }
}
