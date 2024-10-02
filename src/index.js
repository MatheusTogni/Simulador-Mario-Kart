let Mario = {
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3
}

let Peach = {
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2
}

let Yoshi = {
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3
}

let Bowser = {
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5
}

let Luigi = {
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4
}

let DonkeyKong = {
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5
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
            break;
        case 2:
            console.log('Pista estilo CURVA');
            break;
        case 3:
            console.log('Pista estilo CONFRONTO');
            break;
    }
}