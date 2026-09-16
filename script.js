// Repositorio para o Checkpoint #1 de Engenharia de Software 


/* Questão 1

node -v
v24.16.0

$ npm -v
11.14.1

$ git --version
git version 2.54.0.windows.1

*/
// Questão 2
console.log("Mensagem Inicial");
alert("Bem vindos ao checkpoint")


//QUESTÃO 4

var nome = "lucas";
var idade = 19;

let peso = 70;
let altura = 1.75;

const cpf = 11111111111;
const rg = 111111111;

console.log(nome)
console.log(idade)
console.log(peso)
console.log(altura)
console.log(cpf)
console.log(rg)


// Questao 5

let a = 4

let b = 2

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//QUESTÃO 6

let name = "Lucas";
let sobrenome = "Alves";
let old = 27;
let limiteold = 18;

console.log(name == sobrenome);
console.log(name === sobrenome);
console.log(name != sobrenome);
console.log(name !== sobrenome);

console.log(old > limiteold);
console.log(old < limiteold);
console.log(old >= limiteold);
console.log(old <= limiteold);

// Questão 7
let a3
let b3
console.log(a3 && b3);
console.log(a3 || b3);
console.log(a3 != b3);



// Questão 9 

function compararNumeros(a, b) {
    if (a > b) {
        return ("A é maior");
    } if (a < b) {
        return ("B é maior");
    } else {
        return ("ambos são iguais");
    }
}

console.log(compararNumeros(5, 10));
console.log(compararNumeros(10, 5));
console.log(compararNumeros(7, 7));



// exercicio 10

let a1 = 12;
let b2 = 22;
console.log("soma", a1 + b2);


let d1 = true;
let d2 = false;

console.log(d1 && d2);
console.log(d1 || d2);