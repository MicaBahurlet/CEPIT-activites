
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

function concatenarArrays(array1: number[], array2: number[]): number[] {
    //usando el concat de JS para concatenar los dos arrays
    return array1.concat(array2);
}

let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
let arrayConcatenado: number[] = concatenarArrays(array1, array2);
console.log(arrayConcatenado);



//------ Implementa una función que tome un arreglo de números como parámetro y devuelva el resultado de multiplicar todos los elementos.

function multiplicarNum(numeros: number[]): number {
    let resultadoMultiplicacion: number = 1;
    // podría usar un reducer también para multiplicar todos los elementos
    for (let numero of numeros) {
        resultadoMultiplicacion *= numero; // esto es igual a resultadoMultiplicacion = resultadoMultiplicacion * numero
    }
    return resultadoMultiplicacion;
}

let numerosInArray: number[] = [1, 2, 3, 4, 5]; 
let resultadoMultiplicacion: number = multiplicarNum(numerosInArray);
console.log(resultadoMultiplicacion);


// ------ Escribe una función que tome un número como parámetro y devuelva true si es primo, o false si no lo es.

// pido como parametro un numero, especifico el type y luego retorna valor booleano
function esPrimo(numero: number): boolean {
    // los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }

    // bucle for  2 hasta un poco menos que el número
    for (let i = 2; i < numero; i++) {
        // si encontramos un divisor, el número no es primo
        if (numero % i === 0) {
            return false;
        }
    }

    // si ese if y ese for no encuentra divisores, entonces es primo
    return true;
}

console.log(esPrimo(7)); // T
console.log(esPrimo(10)); //  F 
console.log(esPrimo(13)); //  T


//------  Crea una función que tome un elemento y un arreglo como parámetros, y devuelva la cantidad de veces que el elemento aparece en el arreglo.

function ocurrencias(elemento: number, array: number[]): number {
    let contador: number = 0; //para saber cuantas veces se repite el elemento, lo inicio en 0
    // bucle for para recorrer el array, si el elemento es igual al que se recibe, incrementa el contador
    for (let i = 0; i < array.length; i++) {
        //si el elemento es igual, incrementa el contador
        if (array[i] === elemento) {
            contador++;
        }
    }
    //devulve el contador iterado
    return contador;
}       

let array: number[] = [1, 2, 3, 4, 5];
//lo que quiero que busque   
let elemento: number = 3;
//guardo en la variable el numero de ocurrencias del elemento en el array
let resultadoOcurrencias: number = ocurrencias(elemento, array);
console.log(resultadoOcurrencias);
