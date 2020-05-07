"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fs = require("fs");
const parser_1 = require("./parser");
function main() {
    let inp = fs.readFileSync("input1.txt", "utf8");
    let root = parser_1.parse(inp);
    fs.writeFileSync("tree.dot", root);
    console.log("Wrote tree.dot");
    inp = fs.readFileSync("input3.txt", "utf8");
    root = parser_1.parse(inp);
    fs.writeFileSync("tree3.dot", root);
    console.log("Wrote tree3.dot");
    try {
        inp = fs.readFileSync("input2.txt", "utf8");
        root = parser_1.parse(inp);
        console.log("Accepted invalid input2.txt");
    }
    catch (e) {
        console.log("Rejected invalid input2.txt: Good.");
    }
}
main();
//# sourceMappingURL=testharness.js.map