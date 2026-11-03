# Controle de Entrada em Evento

Projeto criado para a atividade **Conversão da Linguagem**. O algoritmo original, escrito em Portugol, foi convertido para JavaScript.

## Objetivo
Verificar se um visitante pode entrar em um evento.

A entrada só é liberada quando:
- o ticket está entre **1 e 100**;
- a pessoa tem **18 anos ou mais**;
- a pessoa não possui objeto ilícito.

## Melhorias realizadas
1. **Validação completa do ticket:** o código original verificava apenas se o ticket era menor ou igual a 100. Agora ele também exige que seja maior ou igual a 1.
2. **Mensagens específicas:** em vez de apenas informar que a entrada foi negada, o programa explica o motivo.
3. **Repetição:** usando `while`, o sistema permite validar mais de um visitante sem reiniciar o programa.
4. **Validação das respostas:** o programa confere dados inválidos, como idade negativa e respostas diferentes de `s` ou `n`.

## Conceitos de JavaScript usados
- `const` e `let`: criam variáveis.
- `if`, `else if` e `else`: tomam decisões.
- `while`: repete uma parte do programa enquanto uma condição for verdadeira.
- `function`: organiza uma tarefa que pode ser reutilizada.
- `async` e `await`: permitem esperar a resposta do usuário no terminal.

## Como executar
1. Instale o [Node.js](https://nodejs.org/).
2. Abra o terminal na pasta do projeto.
3. Execute:

```bash
node entradaEvento.js
```

## Exemplo de uso

```text
Número do ticket (1 a 100): 25
Idade do visitante: 20
Possui objeto ilícito? (s/n): n
Entrada liberada. Bem-vindo ao evento!
```

## Autora
Monansci
