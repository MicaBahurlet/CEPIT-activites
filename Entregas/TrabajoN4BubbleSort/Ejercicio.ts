// Implemente un algoritmo de ordenamiento con el método Bubble Sort para que ordene un arreglo de longitud N en orden descendente. 

// Función de ordenamiento descendente, tomo como referencia los valores del array harcodeados 
function bubbleSortDesc(array: number[]): number[] {
    let n = array.length;
    // for para recorrer todo el array 
    for (let i = 0; i < n; i++) {
        // for para recorrer el array una vez y comparar
        for (let j = 0; j < n - 1; j++) {
            // validación, si es menor que el que sigue lo intercambia
            if (array[j] < array[j + 1]) {
                // intercambio
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Arreglo de ejemplo
let arrayHarcodeado = [5, 3, 8, 4, 2];
console.log("Arreglo harcodeado es:", arrayHarcodeado);

// variable para el array ordenado, llamando a la fn bubbleSortDesc 
let sortedArray = bubbleSortDesc(arrayHarcodeado);

// Imprimir el arreglo ordenado
console.log("Arreglo ordenado en orden descendente es:", sortedArray);
