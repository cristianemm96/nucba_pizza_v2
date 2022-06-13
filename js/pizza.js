export function Pizza() {
  this.nombre = "",
  this.ingredientes = "",
  this.urlIMG = "",
  this.precio = 0,
  this.obtenerNombre = () => {
      return this.nombre;
  }
  this.obtenerIngredientes = function () {
    return this.ingredientes;
  };
  this.obtenerURLDeImagen = () => {
    return this.urlIMG;
  };
  this.obtenerPrecio = () => {
    return this.precio;
  };
}
