//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}
//clase (molde del objeto)
class Camiseta {
    //Popiedades (son las caracteristicas del objeto)

    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    //metodo (acciones o funciones del objeto)

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca =marca;
        this.talla = talla;
        this.precio = precio;
    }
}

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

