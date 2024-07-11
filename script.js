// const frutas = ['Maçã', 'Melancia', 'Banana']
// const frutas2 = ['Pera', 'Abacaxi', 'Açaí']

// frutas.push('Abacaxi') // Adiciona sempre no final da lista.
// frutas.pop() // Remove o último item da lista

// frutas.unshift('Pera') // Adiciona no começo da lista
// frutas.shift() // Remove no começo da lista.

// frutas.splice(1, 2, 'Kiwi', 'Açaí', 'Pera') //1º Parametro - indice do que quer remover, 2º - Quantos itens da lista querem remover, 3º parametro em diante os itens que querem adicionar
// console.log(frutas)

// const todasFrutas = frutas2.concat(frutas) // Junta duas listas em uma só
// console.log(todasFrutas)

// const listaJoin = frutas.join(',') // Junta todos itens da lista com o caracter que vocês passarem
// console.log(listaJoin)


const nome = ['Luciana', 'Auri', 'Alicia']

nome.push('João')
nome.unshift('Kelly')

nome.splice(2, 1,  'Levy')

nome.splice(1, 1, 'Gui', 'Leticia')


console.log(nome)

// -------------------------------------------------------------------------------------------------------------------

// Crie uma lista vazia chamada notas, depois crie um menu que pergunta se quer adicionar uma nota até a pessoa digitar sair,
// no final mostre se a pessoa foi aprovada ou reprovada.


// ==============================================================================

// const nomes = []

// while(true){
//     const nome = prompt('Digite um nome de uma pessoa ou sair para parar')
//     if(nome.toLowerCase() === 'parar'){
//         break
//     }
//     nomes.push(nome)
// }
// console.log(nomes)


// ================================================================

// // CRIE UM LISTA VAZIA DEPOIS FAÇA UM MENU COM AS OPÇÕES DE ADICIONAR UM NOVO USUÁRIO, REMOVER O ULTIMO USUÁRIO DA LISTA ATÉ A PESSOA ESCREVER SAIR PARA PARAR O LOOP

// const pessoas = []

// while(true) {
//     const menu = prompt('1 - Adicionar usuário \n2 - Remover ultimo usuário \n3 - Sair')

//     if(menu === '1'){
//         const nome = prompt('Digite um nome: ')
//         pessoas.push(nome)
//     } else if (menu === '2') {
//         pessoas.pop()
//     }else if (menu === '3'){
//         break
//     } else {
//         console.log('Escolha uma opção válida')
//     }
// }


// console.log(pessoas)


// VERSÃO 2

// // CRIE UM LISTA VAZIA DEPOIS FAÇA UM MENU COM AS OPÇÕES DE ADICIONAR UM NOVO USUÁRIO, REMOVER O ULTIMO USUÁRIO DA LISTA ATÉ A PESSOA ESCREVER SAIR PARA PARAR O LOOP

// const pessoas = []

// while(true) {
//     const menu = prompt('1 - Adicionar usuário \n2 - Remover ultimo usuário \n3 - Sair')

//     if(menu === '1'){
//         const nome = prompt('Digite um nome: ')
//         pessoas.push(nome)
//     } else if (menu === '2') {
//         pessoas.pop()
//     }else if (menu === '3'){
//         break
//     } else {
//         console.log('Escolha uma opção válida')
//     }
// }

// if(!pessoas){
//     console.log('Nenhuma pessoa cadastrada')
// }else {
//     console.log(pessoas)
    
// }

// ==============================================================================

// const cores = ['Vermelho', 'Verde', 'Azul']

// cores.push('Amarelo', 'Roxo')
// cores.pop()
// cores.splice(1, 1, 'Laranja', 'Roxo')
// const novasCores = cores.slice(0,2)
// const metodoJoin = cores.join(', ')
// const coresInvertida = cores.reverse()
// const metodoConcat = cores.concat(novasCores)

// console.log(cores)
// console.log(novasCores)
// console.log(metodoJoin)
// console.log(coresInvertida)
// console.log(metodoConcat)

// =============================================================

// ITERANDO LISTAS

// const cores = ['Vermelho', 'Verde', 'Azul']

// cores.push('Amarelo', 'Roxo')
// cores.splice(1, 1, 'Laranja', 'Roxo')

// console.log(cores)

// for(let cor of cores){
//     document.write(`${cor} <br>`)
// }


// =======================================================

// // CRIE UMA LISTA VAZIA CHAMADA NOTAS, DEPOIS CRIE UM MENU QUE PERGUNTA SE QUER ADICIONAR UMA NOTA ATÉ A PESSOA DIGITAR SAIR, NO FINAL SOME TODAS AS NOTAS DA LISTA E NO FINAL MOSTRE SE A PESSOA FOI APROVADA OU REPROVADA.

// const notas = []

// while(true) {
//     const nota = Number(prompt('Digite uma nota ou digite 0 para sair '))
//     if(nota === 0){
//         break
//     }

//     notas.push(nota)
// }
// let soma_notas = 0
// for(let nota_vez of notas) {
//     soma_notas += nota_vez
// }

// const media = soma_notas / notas.length

// if(media >= 7){
//     console.log(`Aprovado com a média ${media}`)
// }else {
//     console.log(`Reprovado com a média ${media}`)
// }
