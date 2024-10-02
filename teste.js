function sorteiaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

for (let i = 0; i < 6; i++) {
    let numeroAleatorio = sorteiaNumero();
    console.log(numeroAleatorio)

    switch (numeroAleatorio) {
        case 1:
            console.log('O número sorteado foi 1');
            break;
        case 2:
            console.log('O número sorteado foi 2');
            break;
        case 3:
            console.log('O número sorteado foi 3');
            break;
        case 4:
            console.log('O número sorteado foi 4');
            break;
        case 5:
            console.log('O número sorteado foi 5');
            break;
        default:
            console.log('Número fora do intervalo!');
    }
}