"use strict";
exports.__esModule = true;
exports.makeNFA = void 0;
require("./Grammar");
var Grammar_1 = require("./Grammar");
/*export class LR {
    export makeNFA() {
        let allStates: NFAState[] = [];

        let startState = new NFAState( new LR0Item( "S'", [startSymbol], 0 ) );
        allStates.push(startState);

        //list of indices in allStates: The states we need to process
        let toDo: number[] = [0];

        while( toDo.length > 0 ){
            let qi = toDo.pop();
            let q = allStates[qi];
            makeTransitions( q, allStates, toDo, );
        }
    }
}*/
var Gram;
var NFAState = /** @class */ (function () {
    function NFAState(lr0item) {
        this.item = lr0item;
        this.transitions = new Map();
    }
    NFAState.prototype.addTransition = function (sym, stateIndex) {
        if (!this.transitions.has(sym))
            this.transitions.set(sym, []);
        this.transitions.get(sym).push(stateIndex);
    };
    return NFAState;
}());
var LR0Item = /** @class */ (function () {
    function LR0Item(lhs, rhs, dpos) {
        this.lhs = lhs;
        this.rhs = rhs;
        this.dpos = dpos;
    }
    LR0Item.prototype.toString = function () {
        var l1 = this.rhs.slice(0, this.dpos);
        var l2 = this.rhs.slice(this.dpos);
        //Unicode 2192 = arrow, 2022=bullet
        return this.lhs + " \u2192 " + l1.join(" ") + " \u2022 " + l2.join(" ");
    };
    return LR0Item;
}());
function getStateWithLabel(I2, allStates, toDo, stateMap) {
    var I2s = I2.toString();
    var q2i;
    if (stateMap.has(I2s))
        q2i = stateMap.get(I2s);
    else {
        q2i = allStates.length;
        allStates.push(new NFAState(I2));
        toDo.push(q2i);
        stateMap.set(I2s, q2i);
    }
    return q2i;
}
function makeTransitions(q, allStates, toDo, stateMap) {
    //if(q.item.dpos is at end of q.item.rhs)
    if (q.item.dpos == q.item.rhs.length)
        return; //nothing to do
    //let sym = symbol in q.item.rhs immediately after q.item.dpos
    var sym = q.item.rhs[(q.item.dpos + 1)];
    //let I2 = q.item, but with dpos moved right one place
    var I2 = new LR0Item(q.item.lhs, q.item.rhs, (q.item.dpos + 1));
    //let q2i = index of state with label I2
    var q2i = getStateWithLabel(I2, allStates, toDo, stateMap);
    //sym: string, stateIndex: number
    q.addTransition(sym, q2i);
    if (sym in Gram.nonTerminals) { //if sym in nonTerminals
        //for(each production P with lhs of sym){
        allStates.forEach(function (P) {
            if (P.item.lhs == sym) {
                //let I2 = Item with label sym -> # P
                I2 = new LR0Item(sym, I2.rhs, I2.dpos);
                var q2i_1 = getStateWithLabel(I2, allStates, toDo, stateMap);
                q.addTransition("", q2i_1);
            }
            //}
        });
    }
}
function makeNFA(gram) {
    var allStates = [];
    Gram = new Grammar_1.Grammar(gram);
    //    let startState = new NFAState( new LR0Item( "S'", [startSymbol], 0 ) );
    var startState = new NFAState(new LR0Item("S'", ["S"], 0));
    allStates.push(startState);
    //list of indices in allStates: The states we need to process
    var toDo = [0];
    var stateMap = new Map();
    while (toDo.length > 0) {
        var qi = toDo.pop();
        var q = allStates[qi];
        makeTransitions(q, allStates, toDo, stateMap);
    }
    return allStates;
}
exports.makeNFA = makeNFA;
