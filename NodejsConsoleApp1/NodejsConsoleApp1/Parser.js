"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = require("./TreeNode");
const Token_1 = require("./Token");
let antlr4 = require('./antlr4');
let Lexer = require('./gramLexer.js').gramLexer;
let Parser = require('./gramParser.js').gramParser;
function parse(txt) {
    let stream = new antlr4.InputStream(txt);
    let lexer = new Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Parser(tokens);
    parser.buildParseTrees = true;
    let handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners();
    parser.addErrorListener(handler);
    //this assumes your start symbol is 'start'
    let antlrroot = parser.program();
    let root = walk(parser, antlrroot);
    return root.toString();
    // ...
}
exports.parse = parse;
function walk(parser, node) {
    let p = node.getPayload();
    if (p.ruleIndex === undefined) {
        let line = p.line;
        let lexeme = p.text;
        let ty = p.type;
        let sym = parser.symbolicNames[ty];
        if (sym === null)
            sym = lexeme.toUpperCase();
        let T = new Token_1.Token(sym, line, lexeme);
        return new TreeNode_1.TreeNode(sym, T);
    }
    else {
        let idx = p.ruleIndex;
        let sym = parser.ruleNames[idx];
        let N = new TreeNode_1.TreeNode(sym, undefined);
        for (let i = 0; i < node.getChildCount(); ++i) {
            let child = node.getChild(i);
            N.children.push(walk(parser, child));
        }
        return N;
    }
}
class ErrorHandler {
    syntaxError(rec, sym, line, column, msg, e) {
        console.log("Syntax error:", msg, "on line", line, "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    }
}
//# sourceMappingURL=Parser.js.map