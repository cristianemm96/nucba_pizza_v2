import { mostrar } from "./printer.js"

export const pizzaAgregada = (res, nombre, ingredientes, imagen, precio) =>{
  mostrar(res, '<p class="msgAgregada">Pizza agregada con exito</p>')
  setTimeout(()=>{
    res.innerHTML =""
  },2000)
  nombre.value = ""
  ingredientes.value = ""
  imagen.value = ""
  precio.value = ""
}