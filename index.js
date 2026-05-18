import antlr4 from 'antlr4';
const { CharStreams, CommonTokenStream } = antlr4;
import FlorLexer from './generated/FlorLexer.js';
import FlorParser from './generated/FlorParser.js';
import CustomFlorVisitor from './CustomFlorVisitor.js';
import * as fs from 'fs';
import * as readline from 'readline';

async function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question('Ingresá el código fuente: ', (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
    }

    // Análisis léxico
    const inputStream = CharStreams.fromString(input);
    const lexer = new FlorLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Tabla de lexemas-tokens
    tokenStream.fill();
    console.log('\n TABLA DE LEXEMAS Y TOKENS:');
    console.log('─'.repeat(40));
    tokenStream.tokens.forEach(token => {
        if (token.type !== -1) {
            const nombreToken = FlorParser.symbolicNames[token.type] || 'EOF';
            console.log(`  Lexema: ${JSON.stringify(token.text).padEnd(20)} Token: ${nombreToken}`);
        }
    });
    console.log('─'.repeat(40));

    // Análisis sintáctico
    const parser = new FlorParser(tokenStream);
    const tree = parser.juego();

    if (parser.syntaxErrorsCount > 0) {
        console.error('\n Se encontraron errores de sintaxis en la entrada.');
    } else {
        console.log('\n Entrada válida.');

        // Árbol de análisis sintáctico
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`\n Árbol de análisis sintáctico:\n${cadena_tree}`);

        // Interpretación
        console.log('\n INTERPRETACIÓN:');
        console.log('─'.repeat(40));
        const visitor = new CustomFlorVisitor();
        visitor.visit(tree);
        console.log('─'.repeat(40));
    }
}

main();
