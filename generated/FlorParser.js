// Generated from Flor.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import FlorListener from './FlorListener.js';
import FlorVisitor from './FlorVisitor.js';

const serializedATN = [4,1,15,78,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,1,5,1,31,8,1,10,1,12,1,34,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,5,3,43,
8,3,10,3,12,3,46,9,3,1,4,1,4,1,4,1,4,3,4,52,8,4,1,5,1,5,1,5,1,5,1,6,1,6,
1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,1,2,0,11,12,14,14,71,0,22,1,0,
0,0,2,32,1,0,0,0,4,35,1,0,0,0,6,44,1,0,0,0,8,51,1,0,0,0,10,53,1,0,0,0,12,
57,1,0,0,0,14,61,1,0,0,0,16,67,1,0,0,0,18,71,1,0,0,0,20,75,1,0,0,0,22,23,
5,5,0,0,23,24,5,13,0,0,24,25,5,1,0,0,25,26,3,2,1,0,26,27,5,2,0,0,27,28,5,
0,0,1,28,1,1,0,0,0,29,31,3,4,2,0,30,29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,
0,32,33,1,0,0,0,33,3,1,0,0,0,34,32,1,0,0,0,35,36,5,6,0,0,36,37,5,13,0,0,
37,38,5,1,0,0,38,39,3,6,3,0,39,40,5,2,0,0,40,5,1,0,0,0,41,43,3,8,4,0,42,
41,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,7,1,0,0,0,46,44,
1,0,0,0,47,52,3,10,5,0,48,52,3,12,6,0,49,52,3,14,7,0,50,52,3,18,9,0,51,47,
1,0,0,0,51,48,1,0,0,0,51,49,1,0,0,0,51,50,1,0,0,0,52,9,1,0,0,0,53,54,5,7,
0,0,54,55,5,11,0,0,55,56,5,3,0,0,56,11,1,0,0,0,57,58,5,8,0,0,58,59,5,14,
0,0,59,60,5,3,0,0,60,13,1,0,0,0,61,62,5,9,0,0,62,63,3,16,8,0,63,64,5,10,
0,0,64,65,5,13,0,0,65,66,5,3,0,0,66,15,1,0,0,0,67,68,5,14,0,0,68,69,5,4,
0,0,69,70,3,20,10,0,70,17,1,0,0,0,71,72,5,10,0,0,72,73,5,13,0,0,73,74,5,
3,0,0,74,19,1,0,0,0,75,76,7,0,0,0,76,21,1,0,0,0,3,32,44,51];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FlorParser extends antlr4.Parser {

    static grammarFileName = "Flor.g4";
    static literalNames = [ null, "'{'", "'}'", "';'", "'=='", "'juego'", 
                            "'escena'", "'mostrar'", "'leer'", "'si'", "'saltar'" ];
    static symbolicNames = [ null, null, null, null, null, "KW_JUEGO", "KW_ESCENA", 
                             "KW_MOSTRAR", "KW_LEER", "KW_SI", "KW_SALTAR", 
                             "TEXTO", "NUMERO", "NOMBRE", "VARIABLE", "WS" ];
    static ruleNames = [ "juego", "escenas", "escena", "acciones", "accion", 
                         "imprimir", "leer", "condicion", "comparacion", 
                         "saltar", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FlorParser.ruleNames;
        this.literalNames = FlorParser.literalNames;
        this.symbolicNames = FlorParser.symbolicNames;
    }



	juego() {
	    let localctx = new JuegoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FlorParser.RULE_juego);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(FlorParser.KW_JUEGO);
	        this.state = 23;
	        this.match(FlorParser.NOMBRE);
	        this.state = 24;
	        this.match(FlorParser.T__0);
	        this.state = 25;
	        this.escenas();
	        this.state = 26;
	        this.match(FlorParser.T__1);
	        this.state = 27;
	        this.match(FlorParser.EOF);
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
	}



	escenas() {
	    let localctx = new EscenasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FlorParser.RULE_escenas);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 29;
	            this.escena();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	}



	escena() {
	    let localctx = new EscenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FlorParser.RULE_escena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(FlorParser.KW_ESCENA);
	        this.state = 36;
	        this.match(FlorParser.NOMBRE);
	        this.state = 37;
	        this.match(FlorParser.T__0);
	        this.state = 38;
	        this.acciones();
	        this.state = 39;
	        this.match(FlorParser.T__1);
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
	}



	acciones() {
	    let localctx = new AccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FlorParser.RULE_acciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1920) !== 0)) {
	            this.state = 41;
	            this.accion();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FlorParser.RULE_accion);
	    try {
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.imprimir();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.leer();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.condicion();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.saltar();
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
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FlorParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(FlorParser.KW_MOSTRAR);
	        this.state = 54;
	        this.match(FlorParser.TEXTO);
	        this.state = 55;
	        this.match(FlorParser.T__2);
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
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FlorParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(FlorParser.KW_LEER);
	        this.state = 58;
	        this.match(FlorParser.VARIABLE);
	        this.state = 59;
	        this.match(FlorParser.T__2);
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
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FlorParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(FlorParser.KW_SI);
	        this.state = 62;
	        this.comparacion();
	        this.state = 63;
	        this.match(FlorParser.KW_SALTAR);
	        this.state = 64;
	        this.match(FlorParser.NOMBRE);
	        this.state = 65;
	        this.match(FlorParser.T__2);
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
	}



	comparacion() {
	    let localctx = new ComparacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FlorParser.RULE_comparacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(FlorParser.VARIABLE);
	        this.state = 68;
	        this.match(FlorParser.T__3);
	        this.state = 69;
	        this.valor();
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
	}



	saltar() {
	    let localctx = new SaltarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FlorParser.RULE_saltar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(FlorParser.KW_SALTAR);
	        this.state = 72;
	        this.match(FlorParser.NOMBRE);
	        this.state = 73;
	        this.match(FlorParser.T__2);
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
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FlorParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 22528) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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
	}


}

FlorParser.EOF = antlr4.Token.EOF;
FlorParser.T__0 = 1;
FlorParser.T__1 = 2;
FlorParser.T__2 = 3;
FlorParser.T__3 = 4;
FlorParser.KW_JUEGO = 5;
FlorParser.KW_ESCENA = 6;
FlorParser.KW_MOSTRAR = 7;
FlorParser.KW_LEER = 8;
FlorParser.KW_SI = 9;
FlorParser.KW_SALTAR = 10;
FlorParser.TEXTO = 11;
FlorParser.NUMERO = 12;
FlorParser.NOMBRE = 13;
FlorParser.VARIABLE = 14;
FlorParser.WS = 15;

FlorParser.RULE_juego = 0;
FlorParser.RULE_escenas = 1;
FlorParser.RULE_escena = 2;
FlorParser.RULE_acciones = 3;
FlorParser.RULE_accion = 4;
FlorParser.RULE_imprimir = 5;
FlorParser.RULE_leer = 6;
FlorParser.RULE_condicion = 7;
FlorParser.RULE_comparacion = 8;
FlorParser.RULE_saltar = 9;
FlorParser.RULE_valor = 10;

class JuegoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_juego;
    }

	KW_JUEGO() {
	    return this.getToken(FlorParser.KW_JUEGO, 0);
	};

	NOMBRE() {
	    return this.getToken(FlorParser.NOMBRE, 0);
	};

	escenas() {
	    return this.getTypedRuleContext(EscenasContext,0);
	};

	EOF() {
	    return this.getToken(FlorParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterJuego(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitJuego(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitJuego(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_escenas;
    }

	escena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscenaContext);
	    } else {
	        return this.getTypedRuleContext(EscenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterEscenas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitEscenas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitEscenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_escena;
    }

	KW_ESCENA() {
	    return this.getToken(FlorParser.KW_ESCENA, 0);
	};

	NOMBRE() {
	    return this.getToken(FlorParser.NOMBRE, 0);
	};

	acciones() {
	    return this.getTypedRuleContext(AccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterEscena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitEscena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitEscena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_acciones;
    }

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterAcciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitAcciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitAcciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_accion;
    }

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	saltar() {
	    return this.getTypedRuleContext(SaltarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_imprimir;
    }

	KW_MOSTRAR() {
	    return this.getToken(FlorParser.KW_MOSTRAR, 0);
	};

	TEXTO() {
	    return this.getToken(FlorParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_leer;
    }

	KW_LEER() {
	    return this.getToken(FlorParser.KW_LEER, 0);
	};

	VARIABLE() {
	    return this.getToken(FlorParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_condicion;
    }

	KW_SI() {
	    return this.getToken(FlorParser.KW_SI, 0);
	};

	comparacion() {
	    return this.getTypedRuleContext(ComparacionContext,0);
	};

	KW_SALTAR() {
	    return this.getToken(FlorParser.KW_SALTAR, 0);
	};

	NOMBRE() {
	    return this.getToken(FlorParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_comparacion;
    }

	VARIABLE() {
	    return this.getToken(FlorParser.VARIABLE, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterComparacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitComparacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitComparacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SaltarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_saltar;
    }

	KW_SALTAR() {
	    return this.getToken(FlorParser.KW_SALTAR, 0);
	};

	NOMBRE() {
	    return this.getToken(FlorParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterSaltar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitSaltar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitSaltar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FlorParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(FlorParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(FlorParser.NUMERO, 0);
	};

	VARIABLE() {
	    return this.getToken(FlorParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FlorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FlorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FlorParser.JuegoContext = JuegoContext; 
FlorParser.EscenasContext = EscenasContext; 
FlorParser.EscenaContext = EscenaContext; 
FlorParser.AccionesContext = AccionesContext; 
FlorParser.AccionContext = AccionContext; 
FlorParser.ImprimirContext = ImprimirContext; 
FlorParser.LeerContext = LeerContext; 
FlorParser.CondicionContext = CondicionContext; 
FlorParser.ComparacionContext = ComparacionContext; 
FlorParser.SaltarContext = SaltarContext; 
FlorParser.ValorContext = ValorContext; 
