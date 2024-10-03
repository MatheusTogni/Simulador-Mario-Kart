let Mario = {
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
}

let Peach = {
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0
}

let Yoshi = {
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0
}

let Bowser = {
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
}

let Luigi = {
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0
}

let DonkeyKong = {
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0
}

let jogador1 = DonkeyKong

let jogador2 = Peach

function sorteiaRodada() {
    return Math.floor(Math.random() * 3) + 1;
}

function sorteiaDado() {
    return Math.floor(Math.random() * 6) + 1;
}

for (let i = 0; i < 5; i++) {
    let numeroAleatorio = sorteiaRodada();

    switch (numeroAleatorio) {
        case 1:
            console.log('Pista estilo RETA');
            jogador1.velocidade = jogador1.velocidade + sorteiaDado()
            jogador2.velocidade = jogador2.velocidade + sorteiaDado()

            if (jogador1.velocidade > jogador2.velocidade) {
                console.log('Jogador 1 VENCEU, Velocidade jogador 1:', jogador1.velocidade, 'Velocidade jogador 2:', jogador2.velocidade)
                jogador1.pontos = +1
            } else if (jogador2.velocidade > jogador1.velocidade) {
                jogador2.pontos = +1
                console.log('Jogador 2 VENCEU, Velocidade jogador 1:', jogador1.velocidade, 'Velocidade jogador 2:', jogador2.velocidade)
            } else {
                console.log('Empatado, ninguém ganha PONTOS!')
            }
            break;
        case 2:
            console.log('Pista estilo CURVA');
            jogador1.manobrabilidade = jogador1.manobrabilidade + sorteiaDado()
            jogador2.manobrabilidade = jogador2.manobrabilidade + sorteiaDado()

            if (jogador1.manobrabilidade > jogador2.manobrabilidade) {
                console.log('Jogador 1 VENCEU, Manobrabilidade jogador 1:', jogador1.manobrabilidade, 'Manobrabilidade jogador 2:', jogador2.manobrabilidade)
                jogador1.pontos = +1
            } else if (jogador2.manobrabilidade > jogador1.manobrabilidade) {
                jogador2.pontos = +1
                console.log('Jogador 2 VENCEU, Manobrabilidade jogador 1:', jogador1.manobrabilidade, 'Manobrabilidade jogador 2:', jogador2.manobrabilidade)
            } else {
                console.log('Empatado, ninguém ganha PONTOS!')
            }
            break;
        case 3:
            console.log('Pista estilo CONFRONTO');
            break;
    }
}