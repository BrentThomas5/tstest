"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.Grammar = void 0;
//import { error } from "util";
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
        this.nonTerminals.forEach(function (t) {
            _this.first.set(t[0], new Set);
        });
        this.terminals.forEach(function (t) {
            _this.first.set(t[0], new Set);
            _this.first.get(t[0]).add(t[0]);
        });
        this.nullable = this.getNullable();
        while (true) {
            bool = true;
            this.nonTerminals.forEach(function (N) {
                var productions = N[1].split("|");
                productions.forEach(function (P) {
                    var e_1, _a;
                    var pro = P.trim().split(" ");
                    if (pro[0] == "lambda") {
                        pro[0] = "";
                    }
                    else {
                        try {
                            for (var pro_1 = (e_1 = void 0, __values(pro)), pro_1_1 = pro_1.next(); !pro_1_1.done; pro_1_1 = pro_1.next()) {
                                var x = pro_1_1.value;
                                _this.first.get(x).forEach(function (item) {
                                    if (!_this.first.get(N[0]).has(item)) {
                                        _this.first.get(N[0]).add(item);
                                        bool = false;
                                    }
                                });
                                if (!_this.nullable.has(x)) {
                                    break;
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (pro_1_1 && !pro_1_1.done && (_a = pro_1["return"])) _a.call(pro_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                });
            });
            if (bool)
                break;
        }
        return this.first;
    };
    Grammar.prototype.getFollow = function () {
        var follow;
        var bool;
        var firsts = this.getFirst();
        var nullables = this.getNullable();
        /*while(true){
            bool = true;
            this.nonTerminals.forEach(N => {
                let productions = N[1].split("|");
                productions.forEach(P => {
                    let pro = P.trim().split(" ");
                    if(pro[0] == "lambda"){
                        pro[0] = "";
                    }
                    else{
                        
                    }
                })
            })
        }*/
        return follow;
    };
    return Grammar;
}());
exports.Grammar = Grammar;
