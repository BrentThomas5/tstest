export class NodeType {
    label: string;
    n: NodeType[];
    constructor(L: string) {
        this.label = L;
        this.n = [];
    }
}