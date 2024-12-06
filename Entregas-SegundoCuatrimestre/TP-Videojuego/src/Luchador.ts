import { Personaje } from './Personaje';

export class Luchador extends Personaje {
    constructor(nombre: string, nivel: number = 1) {
        super(nombre, nivel, 120); // mas puntos de vida
    }

    golpeFuerte(): void {
        console.log(`${this.nombre} realiza un golpe fuerte!`);
    }
}
