import { $res } from "./app.js";
import { mostrar } from "./printer.js";
let inputVacio = 'Debe ingresar un número de ID'
let stockVacio = 'No hay pizzas en stock'
let fueraDeRango = 'El ID ingresado no existe'
export const errorInputVacio = () => mostrar($res, inputVacio)
export const errorStockVacio = () => mostrar($res, stockVacio)
export const errorDeRango = () => mostrar($res, fueraDeRango)