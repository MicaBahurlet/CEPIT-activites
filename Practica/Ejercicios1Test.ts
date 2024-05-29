



// Implementa una función que tome un arreglo de números como parámetro y devuelva el resultado de multiplicar todos los elementos.
// Escribe una función que tome un número como parámetro y devuelva true si es primo, o false si no lo es.
// Crea una función que tome un elemento y un arreglo como parámetros, y devuelva la cantidad de veces que el elemento aparece en el arreglo.
// Implementa una función que tome dos números como parámetros y devuelva el número más pequeño.
// Escribe una función que tome un arreglo de números como parámetro y lo ordene de forma descendente.

//------ Escribe una función que tome dos números como parámetros y devuelva la suma de ambos.
function sumar (num1: number, num2: number): number {
    return num1 + num2;
}

let num1 = 5;
let num2 = 10;

let suma = sumar(num1, num2);
console.log(suma); // consoleo resultado. 

//------ Crea una función que tome un arreglo de números como parámetro y devuelva el promedio de los elementos.
function promedio(numeros: number[]): number {
    let suma: number = 0;
    //podría usar un reduce pero no me acuerdo, así que utilizo un for of para iterar sobre cada número en el array
    for (let numero of numeros) {
        suma += numero;
    }
    return suma / numeros.length;
}

let numeros: number[] = [1, 2, 3, 4, 5];
let resultado: number = promedio(numeros);
console.log(resultado); 

//------ Implementa una función que tome un arreglo de números como parámetro y devuelva el número más grande.

function encontrarMaximo(numeros: number[]): number {
    //usando el Math.max de JS para encontrar el maximo del array
    return Math.max(...numeros);
}

// hardcodeado el array para probar
let numerosMaximo: number[] = [10, 5, 78, 4, 9];
let maximo: number = encontrarMaximo(numerosMaximo);
console.log(maximo); // Esto imprimirá 5



//------ Escribe una función que tome dos arreglos como parámetros y devuelva un nuevo arreglo que contenga los elementos de ambos arreglos concatenados.
