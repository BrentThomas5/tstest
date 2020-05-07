import { Token } from "./Token"
import { Grammar } from "./Grammar"

export class Tokenizer {
    grammar: Grammar;
    inputData: string;
    currentLine: number = 1;
    idx: number = 0;

    constructor(grammar: Grammar) {
        this.grammar = grammar;

        var addWhite = true;
        var addComment = true;
        for (let i = 0; i < this.grammar.terminals.length; ++i) {
            if (this.grammar.terminals[i][0] == "WHITESPACE")
                addWhite = false;
            if (this.grammar.terminals[i][0] == "COMMENT")
                addComment = false;

        }
        if (addWhite)
            this.grammar.terminals.push(["WHITESPACE", new RegExp("\\s+")]);
        if (addComment)
            this.grammar.terminals.push(["COMMENT", new RegExp("/\\*(.|\\n)*?\\*/")]);

    }
    setInput(inputData: string) {
        this.inputData = inputData;
        this.currentLine = 1;
        this.idx = 0;
        console.log(inputData);
    }
    next(): Token {
        if (this.idx >= this.inputData.length) {
            return new Token("$", undefined, this.currentLine)
        }
        for (let i = 0; i < this.grammar.terminals.length; ++i) {
            let terminal = this.grammar.terminals[i];
            let sym = terminal[0];
            let rex = new RegExp(terminal[1], "y");
            rex.lastIndex = this.idx;
            let m = rex.exec(this.inputData);

            if (m) {
                let lexeme = m[0];
                this.idx += lexeme.length;
                let tmp = this.currentLine;
                this.currentLine += lexeme.split('\n').length - 1;

                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    return new Token(sym, lexeme, tmp);
                }
                else {
                    return this.next();
                }
            }
        }
        throw new Error("Syntax error")
    }
}