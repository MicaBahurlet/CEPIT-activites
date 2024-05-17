// Pido un número base
function pedirNumero(mensaje: string): number {
    const entrada = prompt(mensaje);
    return Number(entrada);
}

// Fn para calcular la potencia
function calcularPotencia(base: number, exponente: number): number {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// Mensaje pedir base
const base = pedirNumero("Ingresa la base:");

// Mensaje pedir exponente
let exponente = pedirNumero("Ingresa el exponente (que sea mayor o igual a 0):");

// Chequeo si es mayor o igual a 0
if (exponente < 0) {
    console.log("El exponente debe ser mayor o igual a cero.");
} else {
    // fn calcular potencia
    const resultado = calcularPotencia(base, exponente);
    // Resultado
    console.log(`El resultado de ${base} elevado a la potencia de ${exponente} es: ${resultado}`);
}
