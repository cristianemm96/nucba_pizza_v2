import { minID, maxID } from "./rango.js";

export const buscarPizza = (id, pizzeria) => {
  if (id >= minID[0] && id <= maxID[0]) {
    let stock = pizzeria.getStock();
    let pizza = stock.find((el) => el[0] == id);
    let msg = setPizzaMsg(pizza[1]);
    return msg;
  } else {
    return `ID no existe. Ingrese ID entre ${minID[0]} y ${maxID[0]}`;
  }
};

const setPizzaMsg = (pizza) => {
  let nombre = pizza.obtenerNombre();
  let ingredientes = pizza.obtenerIngredientes();
  let imagen = pizza.urlIMG;
  let precio = pizza.obtenerPrecio();
  let html = `
            <h2 id="nombre">${nombre}</h2>
            <img id="imagen" src="${imagen}">
            <p>Ingredientes:</p>
            <p id="ingredientes">${ingredientes.join(", ")}.</p>
            <p id="precio">Precio:</p>
            <p>$${precio}</p>
        `;
  return html;
};
