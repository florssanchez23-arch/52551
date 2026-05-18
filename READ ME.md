# Analizador Sintáctico - Tema 25914_7
Construcción de un Analizador con ANTLR4 y JavaScript  
Sintaxis y Semántica de Lenguajes de Programación - UTN FRM

## Requisitos previos
- Java 1.8 o superior
- Node.js 16 o superior

## Instalación
Clonar el repositorio y instalar dependencias:

```bash
git clone https://github.com/florssanchez23-arch/52551.git
cd 52551
npm install
```

## Cómo ejecutar
1. Copiá el contenido de alguno de los archivos de ejemplo en `input.txt`
2. Ejecutá en la terminal:

```bash
npm start
```

## Ejemplos incluidos
Copiar el contenido de cada archivo en `input.txt` y ejecutar `npm start`:

| Archivo | Descripción | Resultado esperado |
|---|---|---|
| ejemplo1_valido.txt | Juego con dos escenas | Entrada válida |
| ejemplo2_valido.txt | Juego con una escena | Entrada válida |
| ejemplo1_error.txt | Falta llave de cierre | Error de sintaxis |
| ejemplo2_error.txt | Falta punto y coma | Error de sintaxis |

## Gramática asignada
```
<juego>       ::= "juego" <nombre> "{" <escenas> "}"
<escenas>     ::= { <escena> }
<escena>      ::= "escena" <nombre> "{" <acciones> "}"
<acciones>    ::= { <imprimir> | <leer> | <condicion> | <saltar> }
<imprimir>    ::= "mostrar" <texto> ";"
<leer>        ::= "leer" <variable> ";"
<condicion>   ::= "si" <comparacion> "saltar" <escena> ";"
<comparacion> ::= <variable> "==" <valor>
```

## Salida del analizador
Al ejecutar `npm start` el analizador muestra:
1. **Tabla de lexemas y tokens** reconocidos durante el análisis léxico
2. **Árbol de análisis sintáctico** en formato texto
3. **Interpretación** del código fuente ejecutado escena por escena
