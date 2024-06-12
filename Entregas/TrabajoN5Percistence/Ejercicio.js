"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
// Definir los arrays
const precios = [525, 3500, 400, 1999];
const productos = ["Leche", "Galletitas", "Harina", "Queso"];
// Convertir los arrays a string y quiero que esten separados por comas
const preciosString = precios.join(',');
const productosString = productos.join(',');
// para crear los archivos de texto
node_fs_1.default.writeFileSync('precios.txt', preciosString);
node_fs_1.default.writeFileSync('productos.txt', productosString);
//mensajito para ver si se guardaron los datos
console.log('Arrays de datos guardados en archivos de texto.');
// Para poder leer los datos
const preciosLeidos = node_fs_1.default.readFileSync('precios.txt', 'utf-8');
const productosLeidos = node_fs_1.default.readFileSync('productos.txt', 'utf-8');
// passo cadenas de texto de nuevo a arrays
const preciosArray = preciosLeidos.split(',').map(Number);
const productosArray = productosLeidos.split(',');
console.log('Precios:', preciosArray);
console.log('Productoss:', productosArray);
