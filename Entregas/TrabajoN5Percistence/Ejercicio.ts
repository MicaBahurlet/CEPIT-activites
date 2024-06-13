import fs from 'node:fs';

// Definir los arrays
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

// Convertir los arrays a string, por eso uso .join y además  y quiero que esten separados por comas, por eso lo paso como parámetro
const preciosString = precios.join(',');
const productosString = productos.join(',');

// para crear los archivos de texto
fs.writeFileSync('precios.txt', preciosString); //escribe el string de precios en un archivo precios.txt
fs.writeFileSync('productos.txt', productosString); //escribe el string de productos en un archivo productos.txt

//mensajito para ver si se guardaron los datos
console.log('Datos guardados exitosamente en archivos de texto.');

// Para poder leer los datos
const preciosLeidos = fs.readFileSync('precios.txt', 'utf-8'); // lee precios.txt y lo almacena en una variable preciosLeidos
const productosLeidos = fs.readFileSync('productos.txt', 'utf-8');

// passo cadenas de texto de nuevo a arrays
const preciosArray = preciosLeidos.split(',').map(Number); //con split divido el string en un array separado por comas y luego convierto en Numer con el map
const productosArray = productosLeidos.split(',');

console.log('Precios:', preciosArray); // imprime en consola precios
console.log('Productoss:', productosArray); // imprime en consola productos
