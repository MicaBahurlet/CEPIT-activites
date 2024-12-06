import { Personaje } from './Personaje';

export class Arquera extends Personaje {
    constructor(nombre: string, nivel: number = 1) {
        super(nombre, nivel, 100);
    }

    dispararFlecha(): void {
        console.log(`${this.nombre} dispara una flecha precisa!`);
    }
    ganarContra(enemigo: Personaje): void {
        console.log(`${this.nombre} ha derrotado a ${enemigo.nombre} con un disparo certero!`);
    }
}
