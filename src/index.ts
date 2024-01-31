// tipos primitivos: number, string, boolean, object

//declarar variáveis no typescript (é possível dizer qual o tipo de variável)
let nome: string;
nome = "Gabriela";
//ou
let nome2: string = "Gabriela";
//ou (typescript já inferindo que a variável é do tipo string)
let nome3 = "Gabriela";

//array
const frutas: string[] = [];
frutas.push("Banana");
frutas.push("Abacaxi");
//tupla (Conjunto de dados que ficam juntos)
const pessoa: [string, number] = ["Gabriela", 30];
console.log(frutas);
console.log(pessoa);