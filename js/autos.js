var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Autos = /** @class */ (function () {
    function Autos(marca, tipo, color, puertas, capacidad) {
        this.marca = marca;
        this.tipo = tipo;
        this.color = color;
        this.puertas = puertas;
        this.capacidad = capacidad;
    }
    /**
     * getAuto
     */
    Autos.prototype.setmarca = function (marca) {
        this.marca = marca;
    };
    /**
     * getmarca
     */
    Autos.prototype.getmarca = function () {
        return this.marca;
    };
    return Autos;
}());
var Motocicleta = /** @class */ (function (_super) {
    __extends(Motocicleta, _super);
    function Motocicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motocicleta.prototype.setcc = function (cc) {
        this.cc = cc;
    };
    Motocicleta.prototype.getcc = function () {
        this.cc;
    };
    return Motocicleta;
}(Autos));
var auto = new Autos("Toyota", "Camioneta", "Gris", 5, 7);
var motocicleta = new Motocicleta("Toyota", "Camioneta", "Gris", 5, 7);
//auto.getmarca();
console.log(auto);
console.log(motocicleta);
