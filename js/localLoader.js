import { errorStockVacio } from "./error.js";
import {setRango} from './rango.js'


export const setStock = (pizzeria, form) => {
  let stockActual = localStorage.getItem("stock");
  if(!stockActual){
    errorStockVacio();
    form.style = "display:none"
  }else{
    agregarPizzasDel(JSON.parse(stockActual), pizzeria)
    setRango(pizzeria)
  }
};

const agregarPizzasDel = (stock,pizzeria) =>{
  stock.map(el=> pizzeria.agregarPizza(el.nombre, el.ingredientes, el.urlIMG, el.precio))
}
