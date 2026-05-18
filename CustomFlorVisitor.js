import FlorVisitor from './generated/FlorVisitor.js';

export default class CustomFlorVisitor extends FlorVisitor {
    constructor() {
        super();
        this.memoria = new Map();
        this.output = [];
    }

    visitJuego(ctx) {
        const nombre = ctx.NOMBRE().getText();
        console.log(`\n🎮 Juego: ${nombre}`);
        return this.visitChildren(ctx);
    }

    visitEscena(ctx) {
        const nombre = ctx.NOMBRE().getText();
        console.log(`\n🎬 Escena: ${nombre}`);
        return this.visitChildren(ctx);
    }

    visitImprimir(ctx) {
        const texto = ctx.TEXTO().getText();
        // Sacar las comillas
        const limpio = texto.slice(1, -1);
        console.log(`📢 mostrar: ${limpio}`);
        return null;
    }

    visitLeer(ctx) {
        const variable = ctx.VARIABLE().getText();
        // Simulamos una lectura con valor por defecto
        this.memoria.set(variable, '?');
        console.log(`📥 leer variable: ${variable}`);
        return null;
    }

    visitCondicion(ctx) {
        const variable = ctx.comparacion().VARIABLE().getText();
        const valor = ctx.comparacion().valor().getText();
        const escenaDestino = ctx.NOMBRE().getText();
        console.log(`❓ si ${variable} == ${valor} → saltar a: ${escenaDestino}`);
        return null;
    }

    visitSaltar(ctx) {
        const destino = ctx.NOMBRE().getText();
        console.log(`⏭️  saltar a: ${destino}`);
        return null;
    }
}
