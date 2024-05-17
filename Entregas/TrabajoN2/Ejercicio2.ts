//Array de números
const numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Para poder encontrar el number más grande 
let numeroMasGrande: number = numeros[0]; // Que es el primero

// bucle for para recorrr if encuentra un número más grande que numeroMasGrande al recorrer el length del array lo actualiza
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeroMasGrande) {
    numeroMasGrande = numeros[i];
  }
}

// por consola
console.log("El número más grande del array es:", numeroMasGrande);

// para determinar si el número es par o impar
function esParOImpar(numero: number): string {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

// Imprimir en consola
const resultado: string = esParOImpar(numeroMasGrande);
console.log("El número más grande es", numeroMasGrande, "y es", resultado);
