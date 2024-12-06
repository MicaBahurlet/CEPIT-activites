import { Personaje } from './Personaje';

export class Hechicera extends Personaje {
    constructor(nombre: string, nivel: number = 1) {
        super(nombre, nivel, 150); // Más puntos de vida que los demás
    }

    atacarA(personaje: Personaje): void {
        console.log(`${this.nombre} ataca a ${personaje.nombre}!`);
        console.log(`${personaje.nombre} pierde puntos de vida, pero no se rinde.`);
    }
}
