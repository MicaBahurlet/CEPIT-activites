
import { Auto } from "./Auto"; 

class RegistroAutomotor {
    /*atributos*/
    public listadoDeAutos : Auto[];
    public patente: string; 
    
    /*constructor*/ 
    public constructor (listadoParametro: Auto[]) {
        this.listadoDeAutos = listadoParametro;
    }

    /*métodos: buscar, agregar, editar y eliminar */
     agregarAuto(parametroAuto: Auto): void {
        this.listadoDeAutos.push(parametroAuto);
    }

    eliminarAuto (patente: string): void {
        this.listadoDeAutos = this.listadoDeAutos.filter(auto => auto.getPatente() !== patente); 
    }

    modificarAuto (parametroAuto: Auto, marca: string, modelo: string, anio: number, motor: string) {

    }

    buscarAuto (patente: string) {
        return this.listadoDeAutos.find(auto => auto.getPatente() === patente);  
    }

}

// Listado de los autos
    
let auto1 = new Auto ("Volkswagen", "Gol", 2016, "Nafta", "AAA000");
let auto2 = new Auto ("Fiat", "Palio", 2006, "Gasoil", "BBB111");
let auto3 = new Auto ("Renault", "Sandero", 2010, "Gasoil", "CCC222");
let auto4 = new Auto ("Nissan", "Versa", 2022, "Nafta", "DDD333");

console.log(Auto);