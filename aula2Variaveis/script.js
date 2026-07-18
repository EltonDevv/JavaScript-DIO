// tipos primitivos

// booleam
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nomeQualquer = 'elton';
console.log(typeof(nomeQualquer));

// funcao
var funcao = function() {}
console.log(typeof(funcao))

// como declarar
var variavel;
console.log(variavel)

variavel = 'elton'
console.log(variavel)

let variavel2 = 'elton'
console.log(variavel)
variavel2 = 'elton2'
console.log(variavel)

const constante;
console.log(constante)

const constante2 = 'elton';
console.log(constante2)

const constante2 = 'elton2';
console.log(constante2)


// escopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal () {
    let escopoLocalInterno = 'local'; // o consoleali de baixo dá erro não porque a variavel não foi definida, mas sim porque ela está dendro de uma função (em um escopo local), por isso o console.log não consegue acessar ele.
}
console.log(escopoLocalInterno)


// Regras de uso de Variáveis
// Iniciar sempre com letras, underscore '_' ou cifrão '$'; Não iniciar com números.
//      Ex (incorreto):
//      var 1nome;
//      Ex (correto):
//      var nome || var _nome

// Não usar espaços (Use camelCase ou _ )
//      Ex (incorreto):
//      var nome completo;
//      Ex (correto);
//      var nomeCompleto || var nome_completo

// Não usar palavras reservadasr;
//      Ex: function

// Declarar variáveis no topo do bloco de código


// atribuição
var atribuição = 'diana';

// comparação
var comparação = '0' == 0;
console.log(comparação);

// comparação idêntita
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);


// opradores relacionais e lógicos
// adição
var adição = 1 + 1;
console.log(adição);

// subtração
var subtração = 2 - 1;
console.log(subtração);

// multiplicação
var multiplicação = 2 * 3;
console.log(multiplicação);

// divisão real
var divisãoReal = 6 / 2;
console.log(divisãoReal);

// divisão inteira
var divisãoInteira = 5 % 2;
console.log(divisãoInteira);

// potenciação
var potenciação = 2 ** 10;
console.log(potenciação);

// Operadores relacionais
// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menorQue
var menorQue = 5 < 2;
console.log(menorQue);

// maiorOuIqualA
var maiorOuIqualA = 5 >= 2;
console.log(maiorOuIqualA);

// menorOuIqualA
var menorOuIqualA = 5 <= 2;
console.log(menorOuIqualA);


// Operadores lógicos
// && 'e'
var e = true && false;
console.log(e);

// || 'ou'
var ou = true || false;
console.log(ou);

// ! 'não'
var nao = !false;
console.log(nao);