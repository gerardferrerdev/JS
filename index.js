//variaveis
let myNickname = "Sr.Ferrer";
const myName = "Gerard";
console.log("Nome: " + myName);
console.log("Apelido: " + myNickname);
// comentario 

const newName = myName + " Ferrer";
console.log("Nome e Sobrenome: "+newName);

console.log("--------------------------------------------------------------------------")

//concatenação
let age = 18;
console.log("Idade de "+newName+": "+age+" anos");

let nextAge = age + 1;
console.log("Ano que vem terá: "+nextAge+" anos");

let nunbsOfNotbooks = 1;
console.log("Antigamente "+newName+" tinha "+nunbsOfNotbooks+" notbook");
let notboksBroken = 1;
let myNotbooks = nunbsOfNotbooks - notboksBroken;
console.log("hoje "+newName+" tem "+myNotbooks+" notbook");

console.log("--------------------------------------------------------------------------")

let price = 300;
console.log(price);
price += 50;
console.log(price);

// Operadores Ternario
console.log("--------------------------------------------------------------------------")

const ageMauricio = 200;
console.log("É",
    ageMauricio >= 1 && ageMauricio <= 10 ? "criança" :
    ageMauricio > 10 && ageMauricio <=17 ? "pré-adolecente" :
    ageMauricio >= 18 && ageMauricio <=59 ? "adulto" : 
    ageMauricio >= 60 && ageMauricio <= 100  ? "idoso" : 
    "anciaõ?????"
);

//estrutura condicional if/else
console.log("--------------------------------------------------------------------------")

let note = 1;

if (note < 6) {
    console.log("Reprovado! Seu incompetente");
}else if (note >= 6 && note <= 9) {
    console.log("Passou na média");
}else{
    console.log("Parabens, passou com exito!!!");
}
console.log("--------------------------------------------------------------------------")


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

//Estrutura condicional Switch
console.log("--------------------------------------------------------------------------")

let enimal = "vaca"

switch (enimal){
    case "gato":{
        console.log("miau")
        break
    }
    case "galinha":{
        console.log("cocorico")
        break
    }
    case "cachorro":{
        console.log("au au")
    }
    case "vaca":{
        console.log("muuuuuuuuuuhhhhhh")
    }
    }

    console.log("--------------------------------------------------------------------------")
// estrutura de repetição "for( ){ }"
console.log("-----Tabuada-----");
let tabuadeDe = 358;
for (let i=1 ; i<=10 ; i++){
    let resultadoTabuada = tabuadeDe*i
    console.log(tabuadeDe+" x "+i+ "= "+resultadoTabuada)
}
console.log("-----------------");

console.log("--------------------------------------------------------------------------")
//Estrutura de repetição while

let num = 1;
let tabudaDe2 = 10;
while (num <=10){
    console.log(`${tabudaDe2} x ${num} = ${tabudaDe2*num}`)
    num++
}
console.log("--------------------------------------------------------------------------")
//Função
function greet(name){
    console.log("Ola, seja bem vindo",name);
}
greet("Reiden");

console.log("--------------------------------------------------------------------------")


function sun(a, b){
    return a + b
}

let result = sun(1, 2)
console.log(result)

console.log("--------------------------------------------------------------------------")

function fatorial(nume){
    let resultado = 1;
    for ( let i = 1; i <= nume ; i++ ){
        resultado *= i
    }
    return resultado
}
console.log(fatorial(2));