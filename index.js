
let myNickname = "Sr.Ferrer";
const myName = "Gerard";
console.log("Nome: " + myName);
console.log("Apelido: " + myNickname);
// comentario 

const newName = myName + " Ferrer";
console.log("Nome e Sobrenome: "+newName);

let age = 18;
console.log("Idade de "+newName+": "+age+" anos");

let nextAge = age + 1;
console.log("Ano que vem terá: "+nextAge+" anos");

let nunbsOfNotbooks = 1;
console.log("Antigamente "+newName+" tinha "+nunbsOfNotbooks+" notbook");
let notboksBroken = 1;
let myNotbooks = nunbsOfNotbooks - notboksBroken;
console.log("hoje "+newName+" tem "+myNotbooks+" notbook");


let price = 300;
console.log(price);
price += 50;
console.log(price);

//ternario

const ageMauricio = 200;
console.log("É",
    ageMauricio >= 1 && ageMauricio <= 10 ? "criança" :
    ageMauricio > 10 && ageMauricio <=17 ? "pré-adolecente" :
    ageMauricio >= 18 && ageMauricio <=59 ? "adulto" : 
    ageMauricio >= 60 && ageMauricio <= 100  ? "idoso" : 
    "anciaõ?????"
);


let note = 1;

if (note < 6) {
    console.log("Reprovado! Seu incompetente");
}else if (note >= 6 && note <= 9) {
    console.log("Passou na média");
}else{
    console.log("Parabens, passou com exito!!!");
}

let sideA = 3;
let sideB = 1;
let sideC = 5;

if (sideA === sideB && sideB ===sideC && sideC === sideA) {
    console.log("Este é um triangulo equilatero");
}else if( sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log("Este é um tringulo isoceles");
}else{
    console.log("Este é um tringulo escaleno");
}