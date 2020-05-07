// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var gramListener = require('./gramListener').gramListener;
var grammarFileName = "gram.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003!A\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0019\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004 \n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u00050\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0002\u0002\n\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0002\u0002\u0002<\u0002\u0012\u0003",
    "\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006\u001f\u0003",
    "\u0002\u0002\u0002\b/\u0003\u0002\u0002\u0002\n1\u0003\u0002\u0002\u0002",
    "\f5\u0003\u0002\u0002\u0002\u000e7\u0003\u0002\u0002\u0002\u0010=\u0003",
    "\u0002\u0002\u0002\u0012\u0013\u0005\n\u0006\u0002\u0013\u0003\u0003",
    "\u0002\u0002\u0002\u0014\u0015\u0005\u0006\u0004\u0002\u0015\u0016\u0005",
    "\u0004\u0003\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0019\u0003",
    "\u0002\u0002\u0002\u0018\u0014\u0003\u0002\u0002\u0002\u0018\u0017\u0003",
    "\u0002\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a \u0005",
    "\b\u0005\u0002\u001b \u0005\u000e\b\u0002\u001c\u001d\u0005\u0010\t",
    "\u0002\u001d\u001e\u0007\u0005\u0002\u0002\u001e \u0003\u0002\u0002",
    "\u0002\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002",
    "\u0002\u001f\u001c\u0003\u0002\u0002\u0002 \u0007\u0003\u0002\u0002",
    "\u0002!\"\u0007\u0006\u0002\u0002\"#\u0007\n\u0002\u0002#$\u0005\f\u0007",
    "\u0002$%\u0007\u000b\u0002\u0002%&\u0005\n\u0006\u0002&0\u0003\u0002",
    "\u0002\u0002\'(\u0007\u0006\u0002\u0002()\u0007\n\u0002\u0002)*\u0005",
    "\f\u0007\u0002*+\u0007\u000b\u0002\u0002+,\u0005\n\u0006\u0002,-\u0007",
    "\u0007\u0002\u0002-.\u0005\n\u0006\u0002.0\u0003\u0002\u0002\u0002/",
    "!\u0003\u0002\u0002\u0002/\'\u0003\u0002\u0002\u00020\t\u0003\u0002",
    "\u0002\u000212\u0007\f\u0002\u000223\u0005\u0004\u0003\u000234\u0007",
    "\r\u0002\u00024\u000b\u0003\u0002\u0002\u000256\u0007\u0011\u0002\u0002",
    "6\r\u0003\u0002\u0002\u000278\u0007\b\u0002\u000289\u0007\n\u0002\u0002",
    "9:\u0005\f\u0007\u0002:;\u0007\u000b\u0002\u0002;<\u0005\n\u0006\u0002",
    "<\u000f\u0003\u0002\u0002\u0002=>\u0007\u000f\u0002\u0002>?\u0005\f",
    "\u0007\u0002?\u0011\u0003\u0002\u0002\u0002\u0005\u0018\u001f/"].join("");


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

var ruleNames =  [ "program", "stmts", "stmt", "cond", "braceblock", "expr", 
                   "loop", "returnStmt" ];

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
gramParser.RULE_cond = 3;
gramParser.RULE_braceblock = 4;
gramParser.RULE_expr = 5;
gramParser.RULE_loop = 6;
gramParser.RULE_returnStmt = 7;


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
        this.state = 16;
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
        this.state = 22;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.IF:
        case gramParser.WHILE:
        case gramParser.RETURN:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.stmt();
            this.state = 19;
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
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.cond();
            break;
        case gramParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.loop();
            break;
        case gramParser.RETURN:
            this.enterOuterAlt(localctx, 3);
            this.state = 26;
            this.returnStmt();
            this.state = 27;
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
    this.enterRule(localctx, 6, gramParser.RULE_cond);
    try {
        this.state = 45;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.match(gramParser.IF);
            this.state = 32;
            this.match(gramParser.LP);
            this.state = 33;
            this.expr();
            this.state = 34;
            this.match(gramParser.RP);
            this.state = 35;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.match(gramParser.IF);
            this.state = 38;
            this.match(gramParser.LP);
            this.state = 39;
            this.expr();
            this.state = 40;
            this.match(gramParser.RP);
            this.state = 41;
            this.braceblock();
            this.state = 42;
            this.match(gramParser.ELSE);
            this.state = 43;
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
    this.enterRule(localctx, 8, gramParser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.match(gramParser.LBR);
        this.state = 48;
        this.stmts();
        this.state = 49;
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

ExprContext.prototype.NUM = function() {
    return this.getToken(gramParser.NUM, 0);
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
    this.enterRule(localctx, 10, gramParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(gramParser.NUM);
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
    this.enterRule(localctx, 12, gramParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(gramParser.WHILE);
        this.state = 54;
        this.match(gramParser.LP);
        this.state = 55;
        this.expr();
        this.state = 56;
        this.match(gramParser.RP);
        this.state = 57;
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
    this.enterRule(localctx, 14, gramParser.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(gramParser.RETURN);
        this.state = 60;
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


exports.gramParser = gramParser;
