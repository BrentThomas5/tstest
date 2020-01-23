"use strict";
exports.__esModule = true;
var Grammar = /** @class */ (function () {
    function Grammar(file) {
        var str_ids = new Set();
        var array = file.split("\n");
        for (var i = 0; i < array.length; i++) {
            if (array[i] != '') {
                if (!array[i].includes(' -> '))
                    throw new Error("Need Identifiers");
                var splitter = array[i].split(' -> ');
                if (str_ids.has(splitter[0]))
                    throw new Error("Identifier already used");
                str_ids.add(splitter[0]);
                try {
                    new RegExp(splitter[1]);
                }
                catch (e) {
                    throw new Error("Your regex is not correct");
                }
            }
        }
    }
    return Grammar;
}());
exports.Grammar = Grammar;
