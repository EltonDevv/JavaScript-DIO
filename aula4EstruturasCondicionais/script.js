var jogadorUm = 0;
var jogadorDois = 0;
var placar;


if (jogadorUm != -1 ) {
    if (jogadorUm > 0) {
        console.log('jogador 1 marcou ponto!');
    } else if (jogadorDois > 0) {
        console.log('jogador 2 marcou ponto!');
    } else {
        console.log ('ninguem marcou ponto.')
    }
}

// com o If ternário:

jogadorUm != -1 && jogadorDois != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos')
if (jogadorUm > 0 && jogadorDois == 0) {
    console.log('jogador 1 marcou ponto!');
    placar = jogadorUm > jogadorDois;
} else if (jogadorDois > 0 && jogadorUm == 0) {
    console.log('jogador 2 marcou ponto!');
    placar = jogadorDois > jogadorUm;
} else {
    console.log ('ninguem marcou ponto.')
}

// Switch/case
switch (placar) {
    case placar = jogadorUm > jogadorDois:
        console.log('Jogador um ganhou');
        break;
    
    case placar = jogadorDois > jogadorUm:
        console.log('Jogador Dois ganhou');
        break;
    
    default:
    console.log('ninguem ganho');
}

// Estruturas de repetição

// For - executa uma instrução até que seja falsa

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let Object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

for(let indice = 0; indice < array.length; indice++) {
    console.log(indice);
};

// For/in - excuta repetição a partir de uma propriedade
// com array
for (let i in array) {
    console.log(i);
};

// com ebject
for (i in Object) {
    console.log(i);
}


// For/of -  executa uma repetição a apartir de uma valor
for (i of array) {
    console.log(i);
};

// com object é diferente pois objetos não são iteraveis, mas tem como:
for (i of Object.propriedade1) {
    console.log(i);
};


// While

var a = 0;

while (a < 10) {
    a++;
    console.log(a);

}

// Do/While

do {
    a++;
    console.log(a);
} while (a < 10)
