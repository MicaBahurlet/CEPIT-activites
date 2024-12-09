export class Auto {
    private marca: string;
    private modelo: string;
    private anio: number;
    private motor: string;
    private patente: string;

    constructor(marca: string, modelo: string, año: number, motor: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = año;
        this.motor = motor;
        this.patente = patente;
    }
    /*metodos*/

    /*SETS*/
    setMarca (marca: string) : void {
        this.marca = "Toyota";
    }
    setModelo (modelo: string) : void {
        this.modelo = "Etios";
    }
    setAnio (anio: number) :void {
        this.anio = 2018;
    }
    setMotor (motor : string) {
        this.motor = "nafta";
    }
    setPatente (patente: string) {
        this.patente = "ABC123"
    }

    /*GETS*/
    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.patente;
    }
    getAnio(): number {
        return this.anio;
    }
    getMotor(): string {
        return this.motor;
    }
    getPatente(): string {
        return this.patente;
    }
}