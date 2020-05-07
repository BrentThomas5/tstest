// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var gramListener = require('./gramListener').gramListener;
var grammarFileName = "gram.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003!\u009e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003*\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00041\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006G\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\nX\n\n\f\n\u000e\n[\u000b\n",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0007\u000bc\n\u000b\f\u000b\u000e\u000bf\u000b\u000b\u0003\f\u0003",
    "\f\u0003\f\u0005\fk\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005",
    "\rr\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e}\n\u000e",
    "\f\u000e\u000e\u000e\u0080\u000b\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u0088\n\u000f",
    "\f\u000f\u000e\u000f\u008b\u000b\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u0090\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u009c\n\u0011\u0003\u0011\u0002\u0006\u0012",
    "\u0014\u001a\u001c\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \u0002\u0002\u0002\u009c\u0002\"\u0003",
    "\u0002\u0002\u0002\u0004)\u0003\u0002\u0002\u0002\u00060\u0003\u0002",
    "\u0002\u0002\b2\u0003\u0002\u0002\u0002\nF\u0003\u0002\u0002\u0002\f",
    "H\u0003\u0002\u0002\u0002\u000eL\u0003\u0002\u0002\u0002\u0010O\u0003",
    "\u0002\u0002\u0002\u0012Q\u0003\u0002\u0002\u0002\u0014\\\u0003\u0002",
    "\u0002\u0002\u0016j\u0003\u0002\u0002\u0002\u0018q\u0003\u0002\u0002",
    "\u0002\u001as\u0003\u0002\u0002\u0002\u001c\u0081\u0003\u0002\u0002",
    "\u0002\u001e\u008f\u0003\u0002\u0002\u0002 \u009b\u0003\u0002\u0002",
    "\u0002\"#\u0005\f\u0007\u0002#$\u0007\u0002\u0002\u0003$\u0003\u0003",
    "\u0002\u0002\u0002%&\u0005\u0006\u0004\u0002&\'\u0005\u0004\u0003\u0002",
    "\'*\u0003\u0002\u0002\u0002(*\u0003\u0002\u0002\u0002)%\u0003\u0002",
    "\u0002\u0002)(\u0003\u0002\u0002\u0002*\u0005\u0003\u0002\u0002\u0002",
    "+1\u0005\n\u0006\u0002,1\u0005\b\u0005\u0002-.\u0005\u000e\b\u0002.",
    "/\u0007\u0005\u0002\u0002/1\u0003\u0002\u0002\u00020+\u0003\u0002\u0002",
    "\u00020,\u0003\u0002\u0002\u00020-\u0003\u0002\u0002\u00021\u0007\u0003",
    "\u0002\u0002\u000223\u0007\b\u0002\u000234\u0007\n\u0002\u000245\u0005",
    "\u0010\t\u000256\u0007\u000b\u0002\u000267\u0005\f\u0007\u00027\t\u0003",
    "\u0002\u0002\u000289\u0007\u0006\u0002\u00029:\u0007\n\u0002\u0002:",
    ";\u0005\u0010\t\u0002;<\u0007\u000b\u0002\u0002<=\u0005\f\u0007\u0002",
    "=G\u0003\u0002\u0002\u0002>?\u0007\u0006\u0002\u0002?@\u0007\n\u0002",
    "\u0002@A\u0005\u0010\t\u0002AB\u0007\u000b\u0002\u0002BC\u0005\f\u0007",
    "\u0002CD\u0007\u0007\u0002\u0002DE\u0005\f\u0007\u0002EG\u0003\u0002",
    "\u0002\u0002F8\u0003\u0002\u0002\u0002F>\u0003\u0002\u0002\u0002G\u000b",
    "\u0003\u0002\u0002\u0002HI\u0007\f\u0002\u0002IJ\u0005\u0004\u0003\u0002",
    "JK\u0007\r\u0002\u0002K\r\u0003\u0002\u0002\u0002LM\u0007\u000f\u0002",
    "\u0002MN\u0005\u0010\t\u0002N\u000f\u0003\u0002\u0002\u0002OP\u0005",
    "\u0012\n\u0002P\u0011\u0003\u0002\u0002\u0002QR\b\n\u0001\u0002RS\u0005",
    "\u0014\u000b\u0002SY\u0003\u0002\u0002\u0002TU\f\u0004\u0002\u0002U",
    "V\u0007\u0012\u0002\u0002VX\u0005\u0014\u000b\u0002WT\u0003\u0002\u0002",
    "\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002Z\u0013\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002",
    "\\]\b\u000b\u0001\u0002]^\u0005\u0016\f\u0002^d\u0003\u0002\u0002\u0002",
    "_`\f\u0004\u0002\u0002`a\u0007\u0013\u0002\u0002ac\u0005\u0016\f\u0002",
    "b_\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002",
    "\u0002de\u0003\u0002\u0002\u0002e\u0015\u0003\u0002\u0002\u0002fd\u0003",
    "\u0002\u0002\u0002gh\u0007\u0014\u0002\u0002hk\u0005\u0016\f\u0002i",
    "k\u0005\u0018\r\u0002jg\u0003\u0002\u0002\u0002ji\u0003\u0002\u0002",
    "\u0002k\u0017\u0003\u0002\u0002\u0002lm\u0005\u001a\u000e\u0002mn\u0007",
    "\u0015\u0002\u0002no\u0005\u001a\u000e\u0002or\u0003\u0002\u0002\u0002",
    "pr\u0005\u001a\u000e\u0002ql\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002",
    "\u0002r\u0019\u0003\u0002\u0002\u0002st\b\u000e\u0001\u0002tu\u0005",
    "\u001c\u000f\u0002u~\u0003\u0002\u0002\u0002vw\f\u0005\u0002\u0002w",
    "x\u0007\u0016\u0002\u0002x}\u0005\u001c\u000f\u0002yz\f\u0004\u0002",
    "\u0002z{\u0007\u0018\u0002\u0002{}\u0005\u001c\u000f\u0002|v\u0003\u0002",
    "\u0002\u0002|y\u0003\u0002\u0002\u0002}\u0080\u0003\u0002\u0002\u0002",
    "~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u001b",
    "\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0082",
    "\b\u000f\u0001\u0002\u0082\u0083\u0005\u001e\u0010\u0002\u0083\u0089",
    "\u0003\u0002\u0002\u0002\u0084\u0085\f\u0004\u0002\u0002\u0085\u0086",
    "\u0007\u0017\u0002\u0002\u0086\u0088\u0005\u001e\u0010\u0002\u0087\u0084",
    "\u0003\u0002\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089\u0087",
    "\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u001d",
    "\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0007\u0018\u0002\u0002\u008d\u0090\u0005\u001e\u0010\u0002\u008e\u0090",
    "\u0005 \u0011\u0002\u008f\u008c\u0003\u0002\u0002\u0002\u008f\u008e",
    "\u0003\u0002\u0002\u0002\u0090\u001f\u0003\u0002\u0002\u0002\u0091\u009c",
    "\u0007\u0011\u0002\u0002\u0092\u009c\u0007\u0010\u0002\u0002\u0093\u0094",
    "\u0007\n\u0002\u0002\u0094\u0095\u0005\u0010\t\u0002\u0095\u0096\u0007",
    "\u000b\u0002\u0002\u0096\u009c\u0003\u0002\u0002\u0002\u0097\u0098\u0007",
    "\n\u0002\u0002\u0098\u0099\u0007\u0019\u0002\u0002\u0099\u009a\u0007",
    "\u000b\u0002\u0002\u009a\u009c\u0005 \u0011\u0002\u009b\u0091\u0003",
    "\u0002\u0002\u0002\u009b\u0092\u0003\u0002\u0002\u0002\u009b\u0093\u0003",
    "\u0002\u0002\u0002\u009b\u0097\u0003\u0002\u0002\u0002\u009c!\u0003",
    "\u0002\u0002\u0002\u000e)0FYdjq|~\u0089\u008f\u009b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "';'", "'if'", "'else'", "'while'", 
                     "'='", "'('", "')'", "'{'", "'}'", "','", "'return'", 
                     null, null, "'or'", "'and'", "'not'", null, null, null, 
                     "'-'", null, null, "'print'", "'input'", "'open'", 
                     "'read'", "'write'", "'close'" ];

var symbolicNames = [ null, "COMMENT", "WHITESPACE", "SEMI", "IF", "ELSE", 
                      "WHILE", "EQ", "LP", "RP", "LBR", "RBR", "CMA", "RETURN", 
                      "FPNUM", "NUM", "OR", "AND", "NOT", "RELOP", "PLUS", 
                      "MULOP", "MINUS", "TYPE", "STRINGCONST", "PRINT", 
                      "INPUT", "OPEN", "READ", "WRITE", "CLOSE", "ID" ];

var ruleNames =  [ "program", "stmts", "stmt", "loop", "cond", "braceblock", 
                   "returnStmt", "expr", "orexp", "andexp", "notexp", "rel", 
                   "sum", "term", "neg", "factor" ];

function gramParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

gramParser.prototype = Object.create(antlr4.Parser.prototype);
gramParser.prototype.constructor = gramParser;

Object.defineProperty(gramParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

gramParser.EOF = antlr4.Token.EOF;
gramParser.COMMENT = 1;
gramParser.WHITESPACE = 2;
gramParser.SEMI = 3;
gramParser.IF = 4;
gramParser.ELSE = 5;
gramParser.WHILE = 6;
gramParser.EQ = 7;
gramParser.LP = 8;
gramParser.RP = 9;
gramParser.LBR = 10;
gramParser.RBR = 11;
gramParser.CMA = 12;
gramParser.RETURN = 13;
gramParser.FPNUM = 14;
gramParser.NUM = 15;
gramParser.OR = 16;
gramParser.AND = 17;
gramParser.NOT = 18;
gramParser.RELOP = 19;
gramParser.PLUS = 20;
gramParser.MULOP = 21;
gramParser.MINUS = 22;
gramParser.TYPE = 23;
gramParser.STRINGCONST = 24;
gramParser.PRINT = 25;
gramParser.INPUT = 26;
gramParser.OPEN = 27;
gramParser.READ = 28;
gramParser.WRITE = 29;
gramParser.CLOSE = 30;
gramParser.ID = 31;

gramParser.RULE_program = 0;
gramParser.RULE_stmts = 1;
gramParser.RULE_stmt = 2;
gramParser.RULE_loop = 3;
gramParser.RULE_cond = 4;
gramParser.RULE_braceblock = 5;
gramParser.RULE_returnStmt = 6;
gramParser.RULE_expr = 7;
gramParser.RULE_orexp = 8;
gramParser.RULE_andexp = 9;
gramParser.RULE_notexp = 10;
gramParser.RULE_rel = 11;
gramParser.RULE_sum = 12;
gramParser.RULE_term = 13;
gramParser.RULE_neg = 14;
gramParser.RULE_factor = 15;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(gramParser.EOF, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitProgram(this);
	}
};




gramParser.ProgramContext = ProgramContext;

gramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, gramParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.braceblock();
        this.state = 33;
        this.match(gramParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmts;
    return this;
}

StmtsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtsContext.prototype.constructor = StmtsContext;

StmtsContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

StmtsContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

StmtsContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmts(this);
	}
};

StmtsContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmts(this);
	}
};




gramParser.StmtsContext = StmtsContext;

gramParser.prototype.stmts = function() {

    var localctx = new StmtsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, gramParser.RULE_stmts);
    try {
        this.state = 39;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.IF:
        case gramParser.WHILE:
        case gramParser.RETURN:
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.stmt();
            this.state = 36;
            this.stmts();
            break;
        case gramParser.RBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

StmtContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StmtContext.prototype.returnStmt = function() {
    return this.getTypedRuleContext(ReturnStmtContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(gramParser.SEMI, 0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmt(this);
	}
};




gramParser.StmtContext = StmtContext;

gramParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, gramParser.RULE_stmt);
    try {
        this.state = 46;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.cond();
            break;
        case gramParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.loop();
            break;
        case gramParser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 43;
            this.returnStmt();
            this.state = 44;
            this.match(gramParser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(gramParser.WHILE, 0);
};

LoopContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

LoopContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LoopContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

LoopContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitLoop(this);
	}
};




gramParser.LoopContext = LoopContext;

gramParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, gramParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(gramParser.WHILE);
        this.state = 49;
        this.match(gramParser.LP);
        this.state = 50;
        this.expr();
        this.state = 51;
        this.match(gramParser.RP);
        this.state = 52;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.IF = function() {
    return this.getToken(gramParser.IF, 0);
};

CondContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

CondContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CondContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

CondContext.prototype.braceblock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BraceblockContext);
    } else {
        return this.getTypedRuleContext(BraceblockContext,i);
    }
};

CondContext.prototype.ELSE = function() {
    return this.getToken(gramParser.ELSE, 0);
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitCond(this);
	}
};




gramParser.CondContext = CondContext;

gramParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, gramParser.RULE_cond);
    try {
        this.state = 68;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.match(gramParser.IF);
            this.state = 55;
            this.match(gramParser.LP);
            this.state = 56;
            this.expr();
            this.state = 57;
            this.match(gramParser.RP);
            this.state = 58;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.match(gramParser.IF);
            this.state = 61;
            this.match(gramParser.LP);
            this.state = 62;
            this.expr();
            this.state = 63;
            this.match(gramParser.RP);
            this.state = 64;
            this.braceblock();
            this.state = 65;
            this.match(gramParser.ELSE);
            this.state = 66;
            this.braceblock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceblockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_braceblock;
    return this;
}

BraceblockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceblockContext.prototype.constructor = BraceblockContext;

BraceblockContext.prototype.LBR = function() {
    return this.getToken(gramParser.LBR, 0);
};

BraceblockContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

BraceblockContext.prototype.RBR = function() {
    return this.getToken(gramParser.RBR, 0);
};

BraceblockContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterBraceblock(this);
	}
};

BraceblockContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitBraceblock(this);
	}
};




gramParser.BraceblockContext = BraceblockContext;

gramParser.prototype.braceblock = function() {

    var localctx = new BraceblockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, gramParser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(gramParser.LBR);
        this.state = 71;
        this.stmts();
        this.state = 72;
        this.match(gramParser.RBR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_returnStmt;
    return this;
}

ReturnStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStmtContext.prototype.constructor = ReturnStmtContext;

ReturnStmtContext.prototype.RETURN = function() {
    return this.getToken(gramParser.RETURN, 0);
};

ReturnStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ReturnStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterReturnStmt(this);
	}
};

ReturnStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitReturnStmt(this);
	}
};




gramParser.ReturnStmtContext = ReturnStmtContext;

gramParser.prototype.returnStmt = function() {

    var localctx = new ReturnStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, gramParser.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(gramParser.RETURN);
        this.state = 75;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitExpr(this);
	}
};




gramParser.ExprContext = ExprContext;

gramParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, gramParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.orexp(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_orexp;
    return this;
}

OrexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrexpContext.prototype.constructor = OrexpContext;

OrexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

OrexpContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

OrexpContext.prototype.OR = function() {
    return this.getToken(gramParser.OR, 0);
};

OrexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterOrexp(this);
	}
};

OrexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitOrexp(this);
	}
};



gramParser.prototype.orexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new OrexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, gramParser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 87;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_orexp);
                this.state = 82;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 83;
                this.match(gramParser.OR);
                this.state = 84;
                this.andexp(0); 
            }
            this.state = 89;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AndexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_andexp;
    return this;
}

AndexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndexpContext.prototype.constructor = AndexpContext;

AndexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

AndexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

AndexpContext.prototype.AND = function() {
    return this.getToken(gramParser.AND, 0);
};

AndexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterAndexp(this);
	}
};

AndexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitAndexp(this);
	}
};



gramParser.prototype.andexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AndexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, gramParser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 98;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_andexp);
                this.state = 93;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 94;
                this.match(gramParser.AND);
                this.state = 95;
                this.notexp(); 
            }
            this.state = 100;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NotexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_notexp;
    return this;
}

NotexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotexpContext.prototype.constructor = NotexpContext;

NotexpContext.prototype.NOT = function() {
    return this.getToken(gramParser.NOT, 0);
};

NotexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

NotexpContext.prototype.rel = function() {
    return this.getTypedRuleContext(RelContext,0);
};

NotexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNotexp(this);
	}
};

NotexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNotexp(this);
	}
};




gramParser.NotexpContext = NotexpContext;

gramParser.prototype.notexp = function() {

    var localctx = new NotexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, gramParser.RULE_notexp);
    try {
        this.state = 104;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.match(gramParser.NOT);
            this.state = 102;
            this.notexp();
            break;
        case gramParser.LP:
        case gramParser.FPNUM:
        case gramParser.NUM:
        case gramParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            this.rel();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_rel;
    return this;
}

RelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelContext.prototype.constructor = RelContext;

RelContext.prototype.sum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumContext);
    } else {
        return this.getTypedRuleContext(SumContext,i);
    }
};

RelContext.prototype.RELOP = function() {
    return this.getToken(gramParser.RELOP, 0);
};

RelContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterRel(this);
	}
};

RelContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitRel(this);
	}
};




gramParser.RelContext = RelContext;

gramParser.prototype.rel = function() {

    var localctx = new RelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, gramParser.RULE_rel);
    try {
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 106;
            this.sum(0);
            this.state = 107;
            this.match(gramParser.RELOP);
            this.state = 108;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 110;
            this.sum(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_sum;
    return this;
}

SumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumContext.prototype.constructor = SumContext;

SumContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SumContext.prototype.sum = function() {
    return this.getTypedRuleContext(SumContext,0);
};

SumContext.prototype.PLUS = function() {
    return this.getToken(gramParser.PLUS, 0);
};

SumContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitSum(this);
	}
};



gramParser.prototype.sum = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, gramParser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 124;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 122;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 116;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 117;
                    this.match(gramParser.PLUS);
                    this.state = 118;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 119;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 120;
                    this.match(gramParser.MINUS);
                    this.state = 121;
                    this.term(0);
                    break;

                } 
            }
            this.state = 126;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.MULOP = function() {
    return this.getToken(gramParser.MULOP, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitTerm(this);
	}
};



gramParser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 26;
    this.enterRecursionRule(localctx, 26, gramParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 135;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_term);
                this.state = 130;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 131;
                this.match(gramParser.MULOP);
                this.state = 132;
                this.neg(); 
            }
            this.state = 137;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_neg;
    return this;
}

NegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegContext.prototype.constructor = NegContext;

NegContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

NegContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

NegContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

NegContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNeg(this);
	}
};

NegContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNeg(this);
	}
};




gramParser.NegContext = NegContext;

gramParser.prototype.neg = function() {

    var localctx = new NegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, gramParser.RULE_neg);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.match(gramParser.MINUS);
            this.state = 139;
            this.neg();
            break;
        case gramParser.LP:
        case gramParser.FPNUM:
        case gramParser.NUM:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.factor();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.NUM = function() {
    return this.getToken(gramParser.NUM, 0);
};

FactorContext.prototype.FPNUM = function() {
    return this.getToken(gramParser.FPNUM, 0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

FactorContext.prototype.TYPE = function() {
    return this.getToken(gramParser.TYPE, 0);
};

FactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitFactor(this);
	}
};




gramParser.FactorContext = FactorContext;

gramParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, gramParser.RULE_factor);
    try {
        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.match(gramParser.NUM);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
            this.match(gramParser.FPNUM);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 145;
            this.match(gramParser.LP);
            this.state = 146;
            this.expr();
            this.state = 147;
            this.match(gramParser.RP);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 149;
            this.match(gramParser.LP);
            this.state = 150;
            this.match(gramParser.TYPE);
            this.state = 151;
            this.match(gramParser.RP);
            this.state = 152;
            this.factor();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


gramParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.orexp_sempred(localctx, predIndex);
	case 9:
			return this.andexp_sempred(localctx, predIndex);
	case 12:
			return this.sum_sempred(localctx, predIndex);
	case 13:
			return this.term_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

gramParser.prototype.orexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.andexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.sum_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gramParser = gramParser;
