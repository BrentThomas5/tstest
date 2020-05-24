"use strict";
exports.__esModule = true;
exports.Tokenizer = void 0;
var Token_1 = require("./Token");
var Tokenizer = /** @class */ (function () {
    function Tokenizer(grammar) {
        this.currentLine = 1;
        this.idx = 0;
        this.previousList = [];
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
    };
    Tokenizer.prototype.peek = function () {
        var tmpCur = this.cur;
        var tmpLine = this.currentLine;
        var tmpList = this.previousList;
        var tmpIdx = this.idx;
        var tmpNext = this.next();
        this.cur = tmpCur;
        this.currentLine = tmpLine;
        this.previousList = tmpList;
        this.idx = tmpIdx;
        return tmpNext;
    };
    Tokenizer.prototype.previous = function () {
        if (this.previousList.length < 2) {
            return undefined;
        }
        return this.previousList[this.previousList.length - 2];
    };
    Tokenizer.prototype.next = function () {
        if (this.idx >= this.inputData.length) {
            return new Token_1.Token("$", undefined, this.currentLine);
        }
        for (var i = 0; i < this.grammar.terminals.length; ++i) {
            var terminal = this.grammar.terminals[i];
            var sym = terminal[0];
            var rex = new RegExp(terminal[1], "y");
            rex.lastIndex = this.idx;
            var m = rex.exec(this.inputData);
            if (m) {
                var lexeme = m[0];
                this.idx += lexeme.length;
                var tmp = this.currentLine;
                this.currentLine += lexeme.split('\n').length - 1;
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    this.cur = new Token_1.Token(sym, lexeme, tmp);
                    this.previousList.push(this.cur);
                    if (this.previousList.length > 2) {
                        this.previousList.shift();
                    }
                    return this.cur;
                }
                else {
                    return this.next();
                }
            }
        }
        throw new Error("Syntax error");
    };
    return Tokenizer;
}());
exports.Tokenizer = Tokenizer;
