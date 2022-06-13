import { pizzaAgregada } from "./pizzaAgregada.js";

const $res = document.querySelector(".result")
const $formPizza = document.querySelector(".form_container");
const $nombre = document.querySelector("#nombre");
const $ingredientes = document.querySelector("#ingredientes");
const $precio = document.querySelector("#precio");
const $urlIMG = document.querySelector("#urlIMG")




window.addEventListener("load", () => {
  $formPizza.addEventListener("submit", setEvent);
});

const setEvent = (e) => {
  e.preventDefault();
  let pizza = {
    nombre: $nombre.value,
    urlIMG: $urlIMG.value,
    ingredientes: $ingredientes.value.split(","),
    precio: $precio.value,
  };
  let stockPizzas = JSON.parse(localStorage.getItem('stock'));
  if(stockPizzas == null){
    stockPizzas = []
  }
  stockPizzas.push(pizza);
  localStorage.setItem('stock', JSON.stringify(stockPizzas));
  pizzaAgregada($res, $nombre, $ingredientes, $urlIMG, $precio)
};
