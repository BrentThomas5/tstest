"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Token {
    constructor(sym, line, lexeme) {
        this.sym = sym;
        this.line = line;
        this.lexeme = lexeme;
    }
    toString() {
        return `${this.sym} ${this.line} ${this.lexeme}`;
    }
}
exports.Token = Token;
//# sourceMappingURL=Token.js.map