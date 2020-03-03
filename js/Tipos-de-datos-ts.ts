type letrasonumeros = string | number;
//String
let cadena: letrasonumeros = "joansaro";

cadena=14;

//Number
let numero: number = 12;

//Boleano
let verdadero_falso: boolean =true;

//any
let cualquiera: any = "hola";
cualquiera =80;

//array
let lenguajes: Array<any> =["hola",5,"estas","este","día"]

let years: number[] = [1,2,3,4,5]


console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);

var numero1 = 10;
var numero2 = 11;

if (numero1 > numero2) {
    console.log("numero 1 es mayor");
    
} else if(numero2 > numero1) {
    console.log("numero 2 es mayor");
    
} else{
    console.log("son iguales");
    
}