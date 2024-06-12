import fs from 'node:fs';

// Definir los arrays
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

// Convertir los arrays a string y quiero que esten separados por comas
const preciosString = precios.join(',');
const productosString = productos.join(',');

// para crear los archivos de texto
fs.writeFileSync('precios.txt', preciosString);
fs.writeFileSync('productos.txt', productosString);

//mensajito para ver si se guardaron los datos
console.log('Arrays de datos guardados en archivos de texto.');

// Para poder leer los datos
const preciosLeidos = fs.readFileSync('precios.txt', 'utf-8');
const productosLeidos = fs.readFileSync('productos.txt', 'utf-8');

// passo cadenas de texto de nuevo a arrays
const preciosArray = preciosLeidos.split(',').map(Number);
const productosArray = productosLeidos.split(',');

console.log('Precios:', preciosArray);
console.log('Productoss:', productosArray);
