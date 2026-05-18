grammar Flor;

// ── REGLAS SINTÁCTICAS ──────────────────────────────────────

juego
    : KW_JUEGO NOMBRE '{' escenas '}' EOF
    ;

escenas
    : escena*
    ;

escena
    : KW_ESCENA NOMBRE '{' acciones '}'
    ;

acciones
    : accion*
    ;

accion
    : imprimir
    | leer
    | condicion
    | saltar
    ;

imprimir
    : KW_MOSTRAR TEXTO ';'
    ;

leer
    : KW_LEER VARIABLE ';'
    ;

condicion
    : KW_SI comparacion KW_SALTAR NOMBRE ';'
    ;

comparacion
    : VARIABLE '==' valor
    ;

saltar
    : KW_SALTAR NOMBRE ';'
    ;

valor
    : TEXTO
    | NUMERO
    | VARIABLE
    ;

// ── REGLAS LÉXICAS ──────────────────────────────────────────

KW_JUEGO    : 'juego' ;
KW_ESCENA   : 'escena' ;
KW_MOSTRAR  : 'mostrar' ;
KW_LEER     : 'leer' ;
KW_SI       : 'si' ;
KW_SALTAR   : 'saltar' ;

TEXTO       : '"' (~["\r\n])* '"' ;
NUMERO      : [0-9]+ ;
NOMBRE      : [A-Z][a-zA-Z0-9_]* ;
VARIABLE    : [a-z][a-zA-Z0-9_]* ;
WS          : [ \t\r\n]+ -> skip ;
