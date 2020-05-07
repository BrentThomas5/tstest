"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let asmCode = [];
let labelCounter = 0;
function emit(instr) {
    asmCode.push(instr);
}
var VarType;
(function (VarType) {
    VarType[VarType["INTEGER"] = 0] = "INTEGER";
    VarType[VarType["FLOAT"] = 1] = "FLOAT";
})(VarType || (VarType = {}));
function programNodeCode(n) {
    //program -> braceblock
    if (n.sym != "program")
        ICE();
    braceblockNodeCode(n.children[0]);
}
function braceblockNodeCode(n) {
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}
function stmtsNodeCode(n) {
    //stmts -> stmt stmts | lambda
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}
function stmtNodeCode(n) {
    //stmt -> cond | loop | return-stmt SEMI
    let c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c);
            break;
        case "loop":
            loopNodeCode(c);
            break;
        case "returnStmt":
            returnstmtNodeCode(c);
            break;
        default:
            ICE();
    }
}
function condNodeCode(n) {
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock
    if (n.children.length === 5) {
        //no 'else'
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("pop rax");
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
    }
    else {
        exprNodeCode(n.children[2]);
        emit("pop rax");
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        var endelseLabel = label();
        emit(`jmp ${endelseLabel}`);
        emit(`${endifLabel}:`);
        braceblockNodeCode(n.children[6]);
        emit(`${endelseLabel}:`);
    }
}
function loopNodeCode(n) {
    //loop : WHILE LP expr RP braceblock;
    var start = label();
    var end = label();
    emit(`${start}:`);
    exprNodeCode(n.children[2]);
    emit("pop rax");
    emit("cmp rax, 0");
    emit(`je ${end}`);
    braceblockNodeCode(n.children[4]);
    emit(`jmp ${start}`);
    emit(`${end}:`);
}
function label() {
    let s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}
function factorNodeCode(n) {
    //factor -> NUM | LP expr RP
    let child = n.children[0];
    console.log(n);
    switch (child.sym) {
        case "NUM":
            let v = parseInt(child.token.lexeme, 10);
            emit(`push qword ${v}`);
            return VarType.INTEGER;
        case "LP":
            if (n.children.length === 3)
                return exprNodeCode(n.children[1]);
            else if (n.children.length === 4) {
                let f = n.children[1].token.lexeme;
                let factorType = factorNodeCode(n.children[3]);
                if (f === "int" && factorType === VarType.FLOAT) {
                    emit("movq xmm0, [rsp]");
                    emit("add rsp, 8");
                    emit("roundsd xmm0, xmm0, 0xb");
                    emit("cvtsd2si rax, xmm0");
                    emit("push rax");
                    return VarType.INTEGER;
                }
                else if (f === "double" && factorType === VarType.INTEGER) {
                    emit("pop rax");
                    emit("cvtsi2sd xmm0, rax");
                    emit("sub rsp, 8");
                    emit("movq [rsp], xmm0");
                    return VarType.FLOAT;
                }
                else {
                    return factorType;
                }
            }
        case "FPNUM":
            let f = parseFloat(child.token.lexeme).toString();
            if (!f.includes("."))
                f += ".0";
            emit(`mov rax, __float64__(${f})`);
            emit("push rax");
            return VarType.FLOAT;
        default:
            ICE();
    }
}
function exprNodeCode(n) {
    return orexpNodeCode(n.children[0]);
}
function orexpNodeCode(n) {
    //orexp -> orexp OR andexp | andexp
    if (n.children.length === 1) {
        return andexpNodeCode(n.children[0]);
    }
    else {
        let lbl = label();
        let orexpType = orexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(orexpType);
        emit("cmp qword [rsp], 0");
        emit(`jne ${lbl}`);
        emit("add rsp,8"); //discard left result (0)
        let andexpType = andexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;
    }
}
function andexpNodeCode(n) {
    //andexp : andexp AND notexp | notexp;
    if (n.children.length === 1) {
        return notexpNodeCode(n.children[0]);
    }
    else {
        let lbl = label();
        let andexpType = andexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit("cmp qword [rsp], 0");
        emit(`je ${lbl}`);
        emit("add rsp,8");
        let notexpType = notexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER;
    }
}
function notexpNodeCode(n) {
    //notexp :  NOT notexp | rel;
    if (n.children.length === 1)
        return relNodeCode(n.children[0]);
    else {
        let lbl = label();
        let lbl2 = label();
        let notexpType = notexpNodeCode(n.children[1]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit("cmp qword [rsp], 0");
        emit(`je ${lbl}`);
        emit("pop rax");
        emit("push 0");
        emit(`jmp ${lbl2}`);
        emit(`${lbl}:`);
        emit("pop rax");
        emit("push 1");
        emit(`${lbl2}:`);
        return VarType.INTEGER;
    }
}
function sumNodeCode(n) {
    //sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1)
        return termNodeCode(n.children[0]);
    else {
        let sumType = sumNodeCode(n.children[0]);
        let termType = termNodeCode(n.children[2]);
        if (sumType !== termType)
            throw new Error("sumNodeCode");
        let str;
        if (sumType === VarType.FLOAT) {
            if (n.children[1].sym === "PLUS")
                str = "addsd";
            else if (n.children[1].sym === "MINUS")
                str = "subsd";
            emit("movq xmm1,[rsp]");
            emit("add rsp, 8");
            emit("movq xmm0, [rsp]");
            emit("add rsp, 8");
            emit(str + " xmm0, xmm1");
            emit("sub rsp, 8");
            emit("movq [rsp], xmm0");
        }
        else if (sumType === VarType.INTEGER) {
            if (n.children[1].sym === "PLUS")
                str = "add";
            else if (n.children[1].sym === "MINUS")
                str = "sub";
            emit("pop rbx"); //second operand
            emit("pop rax"); //first operand
            emit(str + " rax, rbx");
            emit("push rax");
        }
        return sumType;
    }
}
function termNodeCode(n) {
    //term :  term MULOP neg | neg;
    if (n.children.length === 1)
        return negNodeCode(n.children[0]);
    else {
        let termType = termNodeCode(n.children[0]);
        let negType = negNodeCode(n.children[2]);
        if (termType !== negType) {
            throw new Error("not same type");
        }
        if (termType === VarType.INTEGER) {
            emit("pop rbx"); //second operand
            emit("pop rax");
        }
        else if (termType === VarType.FLOAT) {
            emit("movq xmm1, [rsp]");
            emit("add rsp, 8");
            emit("movq xmm0, [rsp]");
            emit("add rsp, 8");
        }
        console.log(n.children[1].token.lexeme);
        switch (n.children[1].token.lexeme) {
            case "*":
                if (termType === VarType.INTEGER) {
                    emit("imul rbx");
                    emit("push rax");
                    return VarType.INTEGER;
                }
                else if (termType === VarType.FLOAT) {
                    emit("mulsd xmm0, xmm1");
                    emit("sub rsp, 8");
                    emit("movq [rsp], xmm0");
                    return VarType.FLOAT;
                }
            case "/":
                if (termType === VarType.INTEGER) {
                    emit("mov qword rdx,0");
                    emit("idiv rbx");
                    emit("push rax");
                    return VarType.INTEGER;
                }
                else if (termType === VarType.FLOAT) {
                    emit("divsd xmm0, xmm1");
                    emit("sub rsp, 8");
                    emit("movq [rsp], xmm0");
                    return VarType.FLOAT;
                }
            case "%":
                if (termType === VarType.INTEGER) {
                    emit("mov qword rdx,0");
                    emit("idiv rbx");
                    emit("push rdx");
                    return VarType.INTEGER;
                }
            default:
                ICE();
        }
    }
}
function negNodeCode(n) {
    //neg :  MINUS neg | factor;
    if (n.children.length === 1)
        return factorNodeCode(n.children[0]);
    else {
        let negType = negNodeCode(n.children[1]);
        if (negType === VarType.INTEGER) {
            emit("pop rbx");
            emit("mov qword rax, 0");
            emit("sub rax, rbx");
            emit("push rax");
            return VarType.INTEGER;
        }
        else if (negType === VarType.FLOAT) {
            emit("movq xmm1, [rsp]");
            emit("xorps xmm0, xmm0");
            emit("subsd xmm0, xmm1");
            emit("movq [rsp], xmm0");
            return VarType.FLOAT;
        }
    }
}
function relNodeCode(n) {
    if (n.children.length === 1)
        return sumNodeCode(n.children[0]);
    else {
        let sum1Type = sumNodeCode(n.children[0]);
        let sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type !== sum2Type)
            throw new Error("relnodecode");
        emit("pop rax"); //second operand
        //first operand is on stack
        // now what?
        //first operand still on stack
        emit("cmp [rsp],rax"); //do the compare
        switch (n.children[1].token.lexeme) {
            case ">=":
                emit("setge al");
                break;
            case "<=":
                emit("setle al");
                break;
            case ">":
                emit("setg  al");
                break;
            case "<":
                emit("setl  al");
                break;
            case "==":
                emit("sete  al");
                break;
            case "!=":
                emit("setne al");
                break;
            default: ICE();
        }
        emit("movzx qword rax, al"); //move with zero extend
        emit("mov [rsp], rax");
        return VarType.INTEGER;
    }
}
function convertStackTopToZeroOrOneInteger(type) {
    if (type == VarType.INTEGER) {
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    }
    else if (type == VarType.FLOAT) {
        emit("xorpd xmm1,xmm1");
        emit("movq xmm0, [rsp]");
        emit("cmpneqsd xmm0, xmm1");
        emit("movq [rsp], xmm0");
        emit("and qword [rsp], 1");
    }
    else {
        throw new Error("convertStackTop");
    }
}
function returnstmtNodeCode(n) {
    //return-stmt -> RETURN expr
    let exprType = exprNodeCode(n.children[1]);
    if (exprType === VarType.FLOAT) {
        emit("movq xmm0, [rsp]");
        emit("add rsp, 8");
        emit("cvtsd2si rax, xmm0");
    }
    else {
        emit("pop rax");
    }
    emit("ret");
}
function ICE() {
    throw new Error("Internal Compiler Error");
}
function makeAsm(root) {
    asmCode = [];
    labelCounter = 0;
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    return asmCode.join("\n");
}
exports.makeAsm = makeAsm;
//# sourceMappingURL=ASM.js.map