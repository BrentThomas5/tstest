import { Terminal } from "./Terminal"
//WHITESPACE -> \s +
//COMMENT -> /\*(.|\n)*?\*/
//STRING -> "(\\" | [^ "])*"
//NUM -> -?\d +
//ADDOP -> [-+]
//MULOP -> [* /]
//RELOP -> >=|<=|>| <
//ASSIGNOP -> =(?!=)
//EQUALITY -> ==
//BOOLNOT -> !(?!=)
//NOTEQUAL -> !=
//POWOP -> [*](?![*])
//IF -> \bif\b
//ELSE -> \belse\b
//ID -> [A - Za - z_]\w *


export class Grammar {    
    terminals: Terminal[] = [new Terminal("WHITESPACE", new RegExp('\s +')),
        new Terminal("COMMENT", new RegExp('/\*(.|\n)*?\*/')),
        new Terminal("STRING", new RegExp('"(\\" | [^ "])*"')),
        new Terminal("NUM", new RegExp('-?\d +')),
        new Terminal("ADDOP", new RegExp('[-+]')),
        new Terminal("MULOP", new RegExp('[* /]')),
        new Terminal("RELOP", new RegExp('>=|<=|>| <')),
        new Terminal("ASSIGNOP", new RegExp('=(?!=)')),
        new Terminal("EQUALITY", new RegExp('==')),
        new Terminal("BOOLNOT", new RegExp('!(?!=)')),
        new Terminal("NOTEQUAL", new RegExp('!=')),
        new Terminal("POWOP", new RegExp('[*](?![*])')),
        new Terminal("IF", new RegExp('\bif\b')),
        new Terminal("ELSE", new RegExp('\belse\b')),
        new Terminal("ID", new RegExp('[A - Za - z_]\w *'))]

    constructor(file: string) {
        let str_ids: Set<string> = new Set();
        let array = file.split("\n");
        for (let i = 0; i < array.length; i++) {
            if (array[i] != '') {
                if (!array[i].includes(' -> '))
                    throw new Error("Need Identifiers");
                let splitter = array[i].split(' -> ');
                if (str_ids.has(splitter[0]))
                    throw new Error("Identifier already used");
                str_ids.add(splitter[0])
                try {
                    new RegExp(splitter[1]);
                }
                catch (e) {
                    throw new Error("Your regex is not correct");
                }
            }
        }
    }
}
