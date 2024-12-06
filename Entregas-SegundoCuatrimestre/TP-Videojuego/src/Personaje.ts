export class Personaje {
    constructor(
        public nombre: string,
        public nivel: number = 1,
        public puntosDeVida: number = 100
    ) {}

    atacar(): void {
        console.log(`${this.nombre} está atacando!`);
    }

    defender(): void {
        console.log(`${this.nombre} se está defendiendo!`);
    }
}
