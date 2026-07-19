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
