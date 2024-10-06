let Mario = {
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

let Peach = {
  velocidade: 3,
  manobrabilidade: 4,
  poder: 2,
  pontos: 0,
};

let Yoshi = {
  velocidade: 2,
  manobrabilidade: 4,
  poder: 3,
  pontos: 0,
};

let Bowser = {
  velocidade: 5,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

let Luigi = {
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

let DonkeyKong = {
  velocidade: 2,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

let jogador1 = DonkeyKong;

let jogador2 = Peach;

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
      console.log("Pista estilo RETA");
      let Anumeroaleatorio1 = sorteiaDado();
      let Anumeroaleatorio2 = sorteiaDado();
      jogador1.velocidade = jogador1.velocidade + Anumeroaleatorio1;

      jogador2.velocidade = jogador2.velocidade + Anumeroaleatorio2;

      if (jogador1.velocidade > jogador2.velocidade) {
        console.log(
          "Jogador 1 VENCEU, Velocidade jogador 1:",
          jogador1.velocidade,
          "Velocidade jogador 2:",
          jogador2.velocidade
        );
        console.log("");
        jogador1.pontos++;
        jogador1.velocidade = jogador1.velocidade - Anumeroaleatorio1;
        jogador2.velocidade = jogador2.velocidade - Anumeroaleatorio2;
      } else if (jogador2.velocidade > jogador1.velocidade) {
        jogador2.pontos++;
        console.log(
          "Jogador 2 VENCEU, Velocidade jogador 1:",
          jogador1.velocidade,
          "Velocidade jogador 2:",
          jogador2.velocidade
        );
        console.log("");
        jogador1.velocidade = jogador1.velocidade - Anumeroaleatorio1;
        jogador2.velocidade = jogador2.velocidade - Anumeroaleatorio2;
      } else {
        console.log("Empatado, ninguém ganha PONTOS!");
        console.log("");
      }
      break;
    case 2:
      let Bnumeroaleatorio1 = sorteiaDado();
      let Bnumeroaleatorio2 = sorteiaDado();
      console.log("Pista estilo CURVA");
      jogador1.manobrabilidade = jogador1.manobrabilidade + Bnumeroaleatorio1;
      jogador2.manobrabilidade = jogador2.manobrabilidade + Bnumeroaleatorio2;

      if (jogador1.manobrabilidade > jogador2.manobrabilidade) {
        console.log(
          "Jogador 1 VENCEU, Manobrabilidade jogador 1:",
          jogador1.manobrabilidade,
          "Manobrabilidade jogador 2:",
          jogador2.manobrabilidade
        );
        console.log("");
        jogador1.pontos++;
        jogador1.manobrabilidade = jogador1.manobrabilidade - Bnumeroaleatorio1;
        jogador2.manobrabilidade = jogador2.manobrabilidade - Bnumeroaleatorio2;
      } else if (jogador2.manobrabilidade > jogador1.manobrabilidade) {
        console.log(
          "Jogador 2 VENCEU, Manobrabilidade jogador 1:",
          jogador1.manobrabilidade,
          "Manobrabilidade jogador 2:",
          jogador2.manobrabilidade
        );
        console.log("");
        jogador2.pontos++;
        jogador1.manobrabilidade = jogador1.manobrabilidade - Bnumeroaleatorio1;
        jogador2.manobrabilidade = jogador2.manobrabilidade - Bnumeroaleatorio2;
      } else {
        console.log("Empatado, ninguém ganha PONTOS!");
        console.log("");
      }
      break;
    case 3:
      let Cnumeroaleatorio1 = sorteiaDado();
      let Cnumeroaleatorio2 = sorteiaDado();
      console.log("Pista estilo CONFRONTO");
      jogador1.poder = jogador1.poder + Cnumeroaleatorio1;
      jogador2.poder = jogador2.poder + Cnumeroaleatorio2;

      if (jogador1.poder > jogador2.poder) {
        console.log(
          "Jogador 1 VENCEU, Poder jogador 1:",
          jogador1.poder,
          "Poder jogador 2:",
          jogador2.poder
        );
        console.log("");
        jogador1.pontos++;
        jogador1.poder = jogador1.poder - Cnumeroaleatorio1;
        jogador2.poder = jogador2.poder - Cnumeroaleatorio2;
      } else if (jogador2.poder > jogador1.poder) {
        console.log(
          "Jogador 2 VENCEU, Poder jogador 1:",
          jogador1.poder,
          "Poder jogador 2:",
          jogador2.poder
        );
        console.log("");
        jogador2.pontos++;
        jogador1.poder = jogador1.poder - Cnumeroaleatorio1;
        jogador2.poder = jogador2.poder - Cnumeroaleatorio2;
      } else {
        console.log("Empatado, ninguém ganha PONTOS!");
        console.log("");
      }
      break;
  }
}
if (jogador1.pontos > jogador2.pontos) {
  console.log(
    "Jogador 1 é o VENCEDOR, pontos:",
    jogador1.pontos,
    "Jogador 2 pontos:",
    jogador2.pontos
  );
} else if (jogador2.pontos > jogador1.pontos) {
  console.log(
    "Jogador 2 é o VENCEDOR, pontos:",
    jogador2.pontos,
    "Jogador 1 pontos:",
    jogador1.pontos
  );
} else {
  console.log(
    "EMPATE, jogador 1 pontos:",
    jogador1.pontos,
    "Jogador 2 pontos:",
    jogador2.pontos
  );
}
