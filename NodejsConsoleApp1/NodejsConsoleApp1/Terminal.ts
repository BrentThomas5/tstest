export class Terminal {
    public sym: string;
    public rex: RegExp;
    constructor(symbol: string, regexp: RegExp){
        this.sym = symbol;
        this.rex = regexp;
    }
}