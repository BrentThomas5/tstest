"use strict";
exports.__esModule = true;
exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(sym, token) {
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
