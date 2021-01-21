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
var fs = require("fs");
var LR_1 = require("./LR");
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
function main() {
    var tests = JSON.parse(fs.readFileSync("tests.txt", "utf8"));
    tests.forEach(function (t) {
        console.log(t.name);
        var nfa = LR_1.makeNFA(t.grammar);
        var dot = outputDot(nfa);
        fs.writeFileSync(t.name + ".dot", dot);
    });
}
function outputDot(fa) {
    var L;
    L = [];
    L.push("digraph d{");
    L.push("node [fontname=Helvetica,shape=box];");
    L.push("edge [fontname=Helvetica];");
    fa.forEach(function (q, i) {
        var x = q.item.toString();
        x = x.replace(/&/g, "&amp;");
        x = x.replace(/</g, "&lt;");
        x = x.replace(/>/g, "&gt;");
        L.push("n" + i + " [label=<" + i + "<br />" + x + ">];");
    });
    fa.forEach(function (q, i) {
        var e_1, _a;
        var _loop_1 = function (sym) {
            var sym1;
            if (sym === "")
                sym1 = "<&lambda;>";
            else
                sym1 = "\"" + sym + "\"";
            var L2 = q.transitions.get(sym);
            L2.forEach(function (i2) {
                L.push("n" + i + " -> n" + i2 + " [label=" + sym1 + "];");
            });
        };
        try {
            for (var _b = __values(q.transitions.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sym = _c.value;
                _loop_1(sym);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    L.push("}");
    return L.join("\n");
}
main();
