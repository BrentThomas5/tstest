"use strict";
exports.__esModule = true;
var Token_1 = require("./Token");
var Tokenizer = /** @class */ (function () {
    function Tokenizer(grammar) {
        this.currentLine = 1;
        this.idx = 0; //index of next unparsed char in inputData
        this.grammar = grammar;
        var addWhite = true;
        var addComment = true;
        for (var i = 0; i < this.grammar.terminals.length; ++i) {
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
    Tokenizer.prototype.setInput = function (inputData) {
        this.inputData = inputData;
        this.currentLine = 1;
        this.idx = 0;
        console.log(inputData);
    };
    Tokenizer.prototype.next = function () {
        if (this.idx >= this.inputData.length) {
            //special "end of file" metatoken
            return new Token_1.Token("$", undefined, this.currentLine);
        }
        for (var i = 0; i < this.grammar.terminals.length; ++i) {
            var terminal = this.grammar.terminals[i];
            var sym = terminal[0];
            var rex = new RegExp(terminal[1], "y"); //RegExp
            rex.lastIndex = this.idx; //tell where to start searching
            var m = rex.exec(this.inputData); //do the search
            if (m) {
                //m[0] contains matched text as string
                var lexeme = m[0];
                this.idx += lexeme.length;
                var tmp = this.currentLine;
                this.currentLine += lexeme.split('\n').length - 1;
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    //return new Token using sym, lexeme, and line number
                    return new Token_1.Token(sym, lexeme, tmp);
                }
                else {
                    //skip whitespace and get next real token
                    return this.next();
                }
            }
        }
        //no match; syntax error
        throw new Error("Syntax error");
    };
    return Tokenizer;
}());
exports.Tokenizer = Tokenizer;
