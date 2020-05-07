"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(sym, token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
    toString() {
        function walk(n, callback) {
            callback(n);
            n.children.forEach((x) => {
                walk(x, callback);
            });
        }
        let L = [];
        L.push("digraph d{");
        L.push(`node [fontname="Helvetica",shape=box];`);
        let counter = 0;
        walk(this, (n) => {
            n.NUMBER = "n" + (counter++);
            let tmp = n.sym;
            if (n.token) {
                tmp += "\n";
                tmp += n.token.lexeme;
            }
            tmp = tmp.replace(/&/g, "&amp;");
            tmp = tmp.replace(/</g, "&lt;");
            tmp = tmp.replace(/>/g, "&gt;");
            tmp = tmp.replace(/\n/g, "<br/>");
            L.push(`${n.NUMBER} [label=<${tmp}>];`);
        });
        walk(this, (n) => {
            n.children.forEach((x) => {
                L.push(`${n.NUMBER} -> ${x.NUMBER};`);
            });
        });
        L.push("}");
        return L.join("\n");
    }
}
exports.TreeNode = TreeNode;
//# sourceMappingURL=TreeNode.js.map