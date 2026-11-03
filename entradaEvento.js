// Conversão do algoritmo "EntradaShow" (Portugol) para JavaScript.
// Melhoria: valida o ticket de 1 a 100 e permite atender vários visitantes.

const readline = require("readline");

function avaliarEntrada(numeroTicket, idade, possuiObjetoIlicito) {
  if (!Number.isInteger(numeroTicket) || numeroTicket < 1 || numeroTicket > 100) {
    return "Entrada negada: ticket inválido.";
  } else if (!Number.isInteger(idade) || idade < 0) {
    return "Entrada negada: idade inválida.";
  } else if (possuiObjetoIlicito !== "s" && possuiObjetoIlicito !== "n") {
    return "Entrada negada: responda apenas s ou n.";
  } else if (idade < 18) {
    return "Entrada negada: menor de idade.";
  } else if (possuiObjetoIlicito === "s") {
    return "Entrada negada: objeto ilícito identificado.";
  }

  return "Entrada liberada. Bem-vindo ao evento!";
}

function iniciarSistema() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function perguntar(pergunta) {
    return new Promise((resolve) => rl.question(pergunta, resolve));
  }

  async function validarEntrada() {
    let continuar = "s";

    while (continuar === "s") {
      const numeroTicket = Number(await perguntar("Número do ticket (1 a 100): "));
      const idade = Number(await perguntar("Idade do visitante: "));
      const possuiObjetoIlicito = (await perguntar("Possui objeto ilícito? (s/n): "))
        .trim()
        .toLowerCase();

      console.log(avaliarEntrada(numeroTicket, idade, possuiObjetoIlicito));

      continuar = (await perguntar("Deseja validar outro visitante? (s/n): "))
        .trim()
        .toLowerCase();

      while (continuar !== "s" && continuar !== "n") {
        continuar = (await perguntar("Resposta inválida. Digite s ou n: "))
          .trim()
          .toLowerCase();
      }
    }

    console.log("Sistema encerrado.");
    rl.close();
  }

  validarEntrada();
}

if (require.main === module) {
  iniciarSistema();
}

module.exports = { avaliarEntrada };
