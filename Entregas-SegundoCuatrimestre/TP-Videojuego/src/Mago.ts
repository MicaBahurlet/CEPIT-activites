import { Personaje } from './Personaje';

export class Mago extends Personaje {
    constructor(nombre: string, nivel: number = 1) {
        super(nombre, nivel, 80); // menos puntos de vida
    }

    lanzarHechizo(): void {
        console.log(`${this.nombre} lanza un poderoso hechizo!`);
    }
}
