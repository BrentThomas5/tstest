"use strict";
exports.__esModule = true;
exports.Token = void 0;
var Token = /** @class */ (function () {
    function Token(sym, lexeme, line) {
        this.sym = sym;
        this.line = line;
        this.lexeme = lexeme;
    }
    Token.prototype.toString = function () {
        return this.sym + " " + this.line + " " + this.lexeme;
    };
    return Token;
}());
exports.Token = Token;
