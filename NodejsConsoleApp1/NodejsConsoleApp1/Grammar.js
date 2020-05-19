"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var Grammar = /** @class */ (function () {
    function Grammar(Gram) {
        this.terminals = [];
        this.nonTerminals = [];
        this.nullable = new Set();
        var s = new Set();
        var input = Gram.split("\n");
        var terms = [];
        var nonTerms = [];
        var isTerm = true;
        input.forEach(function (e) {
            if (e.length != 0) {
                if (isTerm) {
                    terms.push(e);
                }
                else {
                    nonTerms.push(e);
                }
            }
            else {
                isTerm = false;
            }
        });
        for (var i = 0; i < terms.length; i++) {
            if (terms[i].length == 0) {
                continue;
            }
            else if (!terms[i].includes(" -> ")) {
                throw new Error("Need Identifiers");
            }
            var ID = terms[i].split(" -> ");
            if (s.has(ID[0])) {
                throw new Error("Variable already exists");
            }
            else if (ID[0] == "")
                throw new Error("No ID");
            if (s.has(ID[1])) {
                throw new Error("Regex has already been created");
            }
            else if (ID[1] == "")
                throw new Error("Empty Regex");
            try {
                new RegExp(ID[1]);
            }
            catch (_a) {
                throw new Error("Tried to create an invalid regular expression");
            }
            if (!s.has(ID[0]))
                s.add(ID[0]);
            this.terminals[i] = [ID[0], RegExp(ID[1])];
        }
        for (var i = 0; i < nonTerms.length; i++) {
            if (nonTerms[i].length == 0) {
                continue;
            }
            else if (!nonTerms[i].includes(" -> ")) {
                throw new Error("No junction");
            }
            var ID = nonTerms[i].split(" -> ");
            if (ID[0] == "")
                throw new Error("No ID");
            else if (ID[1] == "")
                throw new Error("Empty nonterminal");
            var found = this.nonTerminals.findIndex(function (e) { return e[0] === ID[0]; });
            if (found !== -1) {
                var nonterm = this.nonTerminals[found];
                this.nonTerminals[found][1] = nonterm + ' | ' + ID[1];
            }
            else if (!s.has(ID[0]))
                s.add(ID[0]);
            this.nonTerminals[i] = [ID[0], ID[1]];
        }
        var used = new Set();
        var start = new Node_1.NodeType("expr");
        this.dfs(start, used);
        if (s !== undefined) {
            s.forEach(function (def) {
                if (!used.has(def)) { }
            });
        }
        if (used != undefined) {
            used.forEach(function (v) {
                if (v !== '' && !s.has(v)) { }
            });
        }
    }
    Grammar.prototype.getNullable = function () {
        var _this = this;
        this.nullable = new Set();
        var bool;
        while (true) {
            bool = true;
            this.nonTerminals.forEach(function (N) {
                if (!_this.nullable.has(N[0])) {
                    var productions = N[1].split("|");
                    productions.forEach(function (P) {
                        var pro = P.trim().split(" ");
                        if (pro.every(function (x) { return _this.nullable.has(x) || x == "lambda"; })) {
                            _this.nullable.add(N[0]);
                            bool = false;
                        }
                    });
                }
            });
            if (bool)
                break;
        }
        return this.nullable;
    };
    Grammar.prototype.getFirst = function () {
        var _this = this;
        this.first = new Map();
        var bool;
        this.terminals.forEach(function (t) {
            var tmpset = new Set();
            tmpset.add(t[0]);
            _this.first.set(t[0], tmpset);
        });
        while (true) {
            bool = true;
            this.nonTerminals.forEach(function (N) {
                var firstSet = new Set();
                firstSet.add(N[0]);
                var productions = N[1].split("|");
                productions.forEach(function (P) {
                    var pro = P.trim().split(" ");
                    pro.forEach(function (x) {
                        firstSet.add(x);
                        _this.first.set(N[0], firstSet);
                        if (!_this.nullable.has(x))
                            bool = false;
                    });
                });
            });
            if (bool)
                break;
        }
        return this.first;
    };
    Grammar.prototype.dfs = function (node, used) {
        var _this = this;
        used.add(node.label);
        var found = this.nonTerminals.find(function (nt) { return nt[0] === node.label; });
        if (found !== undefined) {
            var str = found[1];
            str = str.replace('|', '');
            str = str.replace(',', ' ');
            str.split(new RegExp('\\b')).forEach(function (t) {
                var tmp = t.trim();
                if (tmp !== '') {
                    var newNode = new Node_1.NodeType(tmp);
                    node.n.push(newNode);
                }
            });
        }
        if (node.n !== undefined) {
            node.n.forEach(function (t) {
                if (!used.has(t.label)) {
                    _this.dfs(t, used);
                }
            });
        }
    };
    return Grammar;
}());
exports.Grammar = Grammar;
