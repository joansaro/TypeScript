//clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //metodo (acciones o funciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    return Camiseta;
}());
var camiseta = new Camiseta("azul", "camiseta", "adidas", "M", 29.99);
/*
camiseta.color = "azul";
camiseta.modelo = "camiseta";
camiseta.marca = "adidas";
camiseta.talla = "M";
camiseta.precio = 29.99;

var playera = new Camiseta();

playera.color = "rojo";
playera.modelo = "Polo";
playera.marca = "Nautica";
playera.talla = "M";
playera.precio = 49.99;
console.log(playera);
*/
console.log(camiseta);
