export class Token {
    sym: string;
    line: number;
    lexeme: string;
    constructor(sym: string, lexeme: string, line: number) {
        this.sym = sym;
        this.line = line;
        this.lexeme = lexeme;
    }
    toString() {
        return `${this.sym} ${this.line} ${this.lexeme}`
    }
}