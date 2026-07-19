// o que são vetores ou arrays

// como de clarar um array
let array = ['string', 1, true];
console.log(array);

// pode quardar vatios tipos de dados
let array2 = ['string', 1, true, [array3], [array4], [array5], [array6],]
console.log(array2);

// como acessar um indice de array
console.log(array2[0]);

// manipulação de arrays

// forEach() - itera um array
array2.forEach(function(item, index){console.log(item, index)});

// push() - add item no final do array
array2.push('novo item');
console.log(array2);

// pop() - remove item no final do array
array2.pop();
console.log(array2);

// shift() - remove item no início do array
array2.shift();
console.log(array2);

// unshift() - add item no início do array
array2.unshift('novo item');
console.log(array2);

// indexOf() - retorna o índice de um valor
console.log(array2.indexOf(true));

// splice() - remove ou substitui um item pelo índice
array2.splice(0, 3);
console.log(array2);

// slice() - retorna uma parte de um array existente
let novoArray = array2.slice(0,3);
console.log(novoArray);

// ========================================================

// Objetos
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objetoInterno: 'objeto interno'}}
console.log(object);

// acessando uma unica propriedade
console.log(object.boolean);

// dessestruturação do objeto
var string = object.string;
console.log(string);

var arrayDes = object.array;
console.log(arrayDes);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
