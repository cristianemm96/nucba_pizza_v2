import { setStock } from "./localLoader.js";
import { buscarPizza } from "./buscadorPizza.js";
import { mostrar } from "./printer.js";
import { Pizzeria } from "./stockPizzas.js";
import { errorInputVacio, errorStockVacio } from "./error.js";
import { maxID, minID} from "./rango.js";
/*
Url de imagenes para prueba
  https://i.ibb.co/3zxrcgG/calabresa.webp
  https://i.ibb.co/tcbpkPN/muzza.webp
  https://i.ibb.co/MMxYp8F/napolitana.webp
  https://i.ibb.co/Z8QLnLD/fugazzeta.webp
  https://i.ibb.co/Tg7ymPR/jamon-y-morron.webp
  https://i.ibb.co/QcDntGT/faina.webp
*/ 

const $form = document.querySelector(".idSearch");
const $id = document.querySelector("#idInput");
const $formContainer = document.querySelector(".form_container")
export const $res = document.querySelector("#result");
const pizzeria = new Pizzeria();

window.addEventListener("load", () => {
  setStock(pizzeria, $formContainer);
  $id.setAttribute("min", `${minID}`)
  $id.setAttribute("max", `${maxID}`)
  $form.addEventListener("submit", setFormEvent);
});

const setFormEvent = (e) => {
  e.preventDefault();
  if(pizzeria.stockPizza.length == 0){
    errorStockVacio()
  }else if (!$id.value) {
    errorInputVacio();
  } 
  else {
    mostrar($res, "<div class='preloader'></div>")
    setTimeout(()=>
    mostrar($res, buscarPizza($id.value, pizzeria)), 1500)
  }
};

