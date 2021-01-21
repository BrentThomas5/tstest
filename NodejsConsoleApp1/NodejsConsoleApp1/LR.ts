import { stringify } from "querystring";
import "./Grammar"
import { Grammar } from "./Grammar";

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

let Gram: Grammar;

class NFAState  {
    item: LR0Item;
    //key=symbol, value = unique number for an NFAState
    transitions: Map<string,number[]>;
    constructor(lr0item: LR0Item){
        this.item = lr0item;
        this.transitions= new Map();
    }
    addTransition( sym: string, stateIndex: number ){
        if( !this.transitions.has(sym) )
            this.transitions.set(sym,[]);
        this.transitions.get(sym).push(stateIndex);
    }
}

class LR0Item {
    lhs: string;
    rhs: string[];
    dpos: number;

    constructor(lhs: string, rhs: string[], dpos: number){
        this.lhs=lhs;
        this.rhs=rhs;
        this.dpos=dpos;
    }
    toString(): string{
        let l1 = this.rhs.slice(0,this.dpos);
        let l2 = this.rhs.slice(this.dpos);
        //Unicode 2192 = arrow, 2022=bullet
        return this.lhs + " \u2192 " + l1.join(" ") + " \u2022 " + l2.join(" ");
    }
}

function getStateWithLabel( I2: LR0Item, allStates: NFAState[],
    toDo: number[], stateMap: Map<string,number>)
{
    let I2s = I2.toString();
    let q2i : number;
    if( stateMap.has(I2s) )
        q2i = stateMap.get(I2s);
    else{
        q2i = allStates.length;
        allStates.push( new NFAState( I2 ) );
        toDo.push(q2i);
        stateMap.set( I2s, q2i );
    }
    return q2i;
}

function makeTransitions( q: NFAState, allStates: NFAState[], toDo: number[], 
    stateMap: Map<string,number>){
    //if(q.item.dpos is at end of q.item.rhs)
    if(q.item.dpos == q.item.rhs.length)
        return;     //nothing to do
    //let sym = symbol in q.item.rhs immediately after q.item.dpos
    let sym = q.item.rhs[(q.item.dpos + 1)];
    //let I2 = q.item, but with dpos moved right one place
    let I2 = new LR0Item(q.item.lhs, q.item.rhs, (q.item.dpos +1));
    //let q2i = index of state with label I2
    let q2i = getStateWithLabel(I2, allStates, toDo, stateMap );
    //sym: string, stateIndex: number
    q.addTransition( sym, q2i );
    if( sym in Gram.nonTerminals ){ //if sym in nonTerminals
        //for(each production P with lhs of sym){
        allStates.forEach(P => {
            if(P.item.lhs == sym){
                //let I2 = Item with label sym -> # P
                I2 =  new LR0Item(sym, I2.rhs, I2.dpos);
                let q2i = getStateWithLabel(I2, allStates, toDo, stateMap );
                q.addTransition( "", q2i );
            }
        //}
        })
    }
}

export function makeNFA(gram : string) {
    let allStates: NFAState[] = [];
    Gram = new Grammar(gram);
//    let startState = new NFAState( new LR0Item( "S'", [startSymbol], 0 ) );
    let startState = new NFAState( new LR0Item( "S'", ["S"], 0 ) );
    allStates.push(startState);

    //list of indices in allStates: The states we need to process
    let toDo: number[] = [0];

    let stateMap : Map<string,number> = new Map();


    while( toDo.length > 0 ){
        let qi = toDo.pop();
        let q = allStates[qi];
        makeTransitions( q, allStates, toDo, stateMap);
    }
    return allStates;
}