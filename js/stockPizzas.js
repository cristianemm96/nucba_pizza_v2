import { Pizza } from "./pizza.js";

let pizzeria = null;

export class Pizzeria {
  constructor() {
    if (!pizzeria) {
      this.ultimoId = 0,
      this.stockPizza = [],
      pizzeria = this;
    } else {
      return pizzeria;
    }
  }
  agregarPizza = (nombre, ingredientes, imagen, precio) => {
    //Agrega una nueva pizza al stock segun el
    //nombre, ingredientes e imagen dados.
    let pizza = new Pizza();
    this.setPizza(pizza, nombre, ingredientes, imagen, precio);
    this.stockPizza.push([this.ultimoId, pizza]);
    this.ultimoId++;
  };
  setPizza = (pizza, nombre, ingredientes, imagen, precio) => {
    //Setea los campos de una pizza
    pizza.nombre = nombre;
    pizza.ingredientes = ingredientes;
    pizza.urlIMG = imagen;
    pizza.precio = precio;
  }
  getStock = ()=>{
    return this.stockPizza
  }
  getMinID = () =>{
    let pizzaS = this.stockPizza[0]
    let min = pizzaS[0]
    return min
  }
  getMaxID = () =>{
    return (this.ultimoId - 1);
  }
}
