// Pido un número
function pedirNumero(mensaje) {
    var entrada = prompt(mensaje);
    return Number(entrada);
}
// Función para calcular la potencia
function calcularPotencia(base, exponente) {
    var resultado = 1;
    for (var i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
// Pedimos la base al usuario
var base = pedirNumero("Ingresa la base:");
// Pedimos el exponente al usuario
var exponente = pedirNumero("Ingresa el exponente (mayor o igual a 0):");
// Verificamos que el exponente sea mayor o igual a cero
if (exponente < 0) {
    console.log("El exponente debe ser mayor o igual a cero.");
}
else {
    // Calculamos la potencia
    var resultado = calcularPotencia(base, exponente);
    // Mostramos el resultado
    console.log("El resultado de ".concat(base, " elevado a la potencia de ").concat(exponente, " es: ").concat(resultado));
}
