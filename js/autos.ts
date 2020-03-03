interface AutosBase{
    setmarca(marca);
    getmarca();
}
class Autos implements AutosBase{

    private marca: string;
    private tipo: string;
    private color: string;
    private puertas: number;
    private capacidad: number;


    constructor(marca, tipo, color, puertas, capacidad){
        this.marca = marca;
        this.tipo = tipo;
        this.color = color;
        this.puertas = puertas;
        this.capacidad = capacidad;


    }
    /**
     * getAuto
     */
    public setmarca(marca) {
        this.marca = marca;
    }

    /**
     * getmarca
     */
    public getmarca() {
        return this.marca;
    }
     
}

class Motocicleta extends Autos{
    public cc: number;
    public motor: number;

    setcc(cc){
        this.cc = cc;
    }

    getcc(){
        this.cc;
    }
}
var auto = new Autos("Toyota", "Camioneta", "Gris", 5, 7 );
var motocicleta = new Motocicleta("Toyota", "Camioneta", "Gris", 5, 7);



//auto.getmarca();


console.log(auto);
console.log(motocicleta);
