"use strict";
exports.__esModule = true;
var Grammar = /** @class */ (function () {
    function Grammar(Gram) {
        this.terminals = [];
        var s = new Set();
        var input = Gram.split("\n");
        for (var i = 0; i < input.length; i++) {
            if (input[i].length == 0) {
                continue;
            }
            else if (!input[i].includes(" -> ")) {
                throw new Error("No Identifiers");
            }
            var ID = input[i].split(" -> ");
            if (s.has(ID[0])) {
                throw new Error("Already has that variable");
            }
            else if (ID[0] == "")
                throw new Error("Empty ID");
            if (s.has(ID[1]))
                throw new Error("Regex already created");
            else if (ID[1] == "")
                throw new Error("Empty Regex");
            try {
                new RegExp(ID[1]);
            }
            catch (_a) {
                throw new Error("Invalid regular expression");
            }
            s.add(ID[0]);
            this.terminals[i] = [ID[0], RegExp(ID[1])];
        }
    }
    return Grammar;
}());
exports.Grammar = Grammar;
