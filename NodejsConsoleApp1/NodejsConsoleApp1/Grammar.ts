import { stringify } from "querystring";
import { Console } from "console";

//import { error } from "util";
export class Grammar {
    terminals: [string, RegExp][] = [];
    nonTerminals: [string, string][] = [];
    nullable: Set<string> = new Set();
    firsts: Map<string, Set<string>>;
    follows: Map<string, Set<string>>;
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
        this.firsts = new Map();
        let bool;
        this.nonTerminals.forEach(t => {
            this.firsts.set(t[0], new Set);
        })
        this.terminals.forEach(t => {
            this.firsts.set(t[0], new Set);
            this.firsts.get(t[0]).add(t[0]);
        })
        this.nullable = this.getNullable();
        
        while (true) {
            bool = true;
            this.nonTerminals.forEach(N => {
                let productions = N[1].split("|");
                productions.forEach(P => {
                    let pro = P.trim().split(" ");
                    if( pro[0] == "lambda"){
                        pro[0] = "";
                    }
                    else{
                        for(let x of pro){
                            this.firsts.get(x).forEach(item => {
                                if(!this.firsts.get(N[0]).has(item)){
                                    this.firsts.get(N[0]).add(item);
                                    bool = false;
                                }
                            })
                            if(!this.nullable.has(x)){
                                break;
                            }
                        }
                    }
                })
            })
            if (bool)
                break;
        }
        return this.firsts;
    }

    getFollow() {
        this.follows = new Map();
        let bool;
        let firsties = this.getFirst();
        let nullables = this.getNullable();
        let brokeOut = false;
        let nonterms = new Array();

        this.nonTerminals.forEach(t => {
            this.follows.set(t[0], new Set);
            nonterms.push(t[0]);
        })
        
        this.follows.values().next().value.add("$");

        while(true)
        {
            bool = true;
            this.nonTerminals.forEach(N => {
                let productions = N[1].split("|");
                productions.forEach(P => {
                    let pro = P.trim().split(" ");
                    for (let i = 0; i < pro.length; i++){
                        let x = pro[i];
                        if(nonterms.includes(x)){
                            brokeOut = false;
                            for(let k = i+1; k < pro.length; k++){
                                let y = pro[k];
                                firsties.get(y).forEach(item => {
                                    if(!this.follows.get(x).has(item)){
                                        this.follows.get(x).add(item);
                                        bool = false;
                                    }
                                })
                                if(!nullables.has(y)){
                                    brokeOut = true;
                                    break;
                                }
                            }
                            if(!brokeOut){
                                this.follows.get(N[0]).forEach(item => {
                                    if(!this.follows.get(x).has(item)){
                                        this.follows.get(x).add(item);
                                        bool = false;
                                    }
                                })
                            }
                        }
                    }
                })
            })
            if (bool)
                break;
        }
        return this.follows;
    }
}