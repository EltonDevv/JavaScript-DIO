// Funções Declarativas
function funcao () {
    console.log("Mensagem vinda de uma função declarativa!");
};

funcao();

// Expressões de funções
var funcao = function funcaoDeExpressao () {
    console.log("Mensagem vinda de uma expressão de função!");
};

funcao();

var funcao = function () {
    console.log("Mensagem vinda também de uma expressão de função!");
};

funcao();

// Arrow Function
var funcao = () => {
    console.log("Essa daqui já é uma mensagem vinda de uma Arrow function!");
};

funcao();
