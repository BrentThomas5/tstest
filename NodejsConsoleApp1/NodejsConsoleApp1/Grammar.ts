//import { error } from "util";
export class Grammar {
    terminals: [string, RegExp][] = [];
    nonTerminals: [string, string][] = [];
    nullable: Set<string> = new Set();
    first: Map<string, Set<string>>;
    constructor(Gram: string) {
        let s: Set<string> = new Set();
        var input = Gram.split("\n");
        let terms: string [] = [];
        let nonTerms: string[] = [];
        let isTerm: boolean = true;
        input.forEach(e => {
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
        })
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
                new RegExp(ID[1])
            }
            catch {
                throw new Error("Tried to create an invalid regular expression")
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
            else if (ID[1]=="")
                throw new Error("Empty nonterminal");
            const found: number = this.nonTerminals.findIndex(e => e[0] === ID[0])
            if (found !== -1) {
                var nonterm = this.nonTerminals[found];
                this.nonTerminals[found][1] = nonterm + ' | ' + ID[1];

            }
            else if (!s.has(ID[0]))
                s.add(ID[0]);
            this.nonTerminals[i] = [ID[0], ID[1]];
        }
    }
    
    getNullable() {
        this.nullable = new Set();
        let bool;
        while (true) {
            bool = true;
            this.nonTerminals.forEach(N => {
                if (!this.nullable.has(N[0])) {
                    let productions = N[1].split("|");
                    productions.forEach(P => {
                        let pro = P.trim().split(" ");

                        if (pro.every(x => this.nullable.has(x) || x == "lambda")) {
                            this.nullable.add(N[0]);
                            bool = false;
                        }
                    })
                }
            });
            if (bool)
                break;
        }
        return this.nullable;
    }

    getFirst() {
        this.first = new Map();
        let bool;
        this.nonTerminals.forEach(t => {
            this.first.set(t[0], new Set);
            //console.log("nonterminal:",t[0]);
        })
        this.terminals.forEach(t => {
            this.first.set(t[0], new Set);
            this.first.get(t[0]).add(t[0]);
            //console.log("terminal:",t[0]);
        })
        
        this.nullable = this.getNullable();
        this.nullable.forEach(n => {
            //console.log(n);
        })

        while (true) {
            bool = true;
            this.nonTerminals.forEach(N => {
                let bool2 = true;
                let i = 0;
                //console.log(N[0]);
                //this.first.get(N[0]).add(N[0]);
                let productions = N[1].split("|");
                //console.log(N[0] + ": " + N[1]);
                productions.forEach(P => {
                    let pro = P.trim().split(" ");
                    if( pro[0] == "lambda"){
                        pro[0] = "";

                    }
                    else{
                        for(let x of pro){
                            this.first.get(x).forEach(item => {
                                if(!this.first.get(N[0]).has(item)){
                                    this.first.get(N[0]).add(item);
                                    bool = false;
                                }
                            })
                            if(!this.nullable.has(x)){
                                break;
                            }
                        }
                    }
                })
            });
            if (bool)
                break;
        }
        for(let entry of this.first.entries()){
            //console.log("Key:",entry[0],"|||| Value:",entry[1]);
        }
        return this.first;
    }
}