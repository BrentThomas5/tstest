import "./Grammar"

export class LR {
    makeNFA() {
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
}

function makeTransitions( q: NFAState, allStates: NFAState[], toDo: number[], 
    stateMap: Map<string,number>){
    //if(q.item.dpos is at end of q.item.rhs)
    if()
        return;     //nothing to do
    //let sym = symbol in q.item.rhs immediately after q.item.dpos
    let sym = "";
    //let I2 = q.item, but with dpos moved right one place
    let I2 = new LR0Item(q.item.lhs, q.item.rhs, (q.item.dpos +1));
    //let q2i = index of state with label I2
    let q2i = getStateWithLabel(I2, allStates, toDo, stateMap );
    //sym: string, stateIndex: number
    q.addTransition( sym, q2i );
    if( sym in Grammar.nonTerminals ){ //if sym in nonTerminals
        for(each production P with lhs of sym){
            //let I2 = Item with label sym -> # P
            let q2i = getStateWithLabel(I2, allStates, toDo, stateMap );
            q.addTransition( "", q2i );
        }
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