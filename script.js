// //                PRATICA GUIADA I
// const estudante = {
//     nome: `Iago`,
//     sobrenome: `Amaral`,
//     numeroDeMatricula: 420,
//     notasDoSemestre: [8.5, 5, 10, 9, 7] 
// }

// //               PRATICA GUIADA II
// estudante.modulo = 3 

// /*imprima no console a propriedade nome
// imprima no console a segunda nota da pessoa no semestre
// imprima o módulo em que a pessoa está*/

// const nomeDeEstudante = estudante.nome
// console.log(estudante.nome)

// const segundaNotaDoSemestre = estudante.notasDoSemestre[1]
// console.log(`Segunda nota do semestre: `, segundaNotaDoSemestre)

// const moduloAtual = estudante.modulo
// console.log(`Modulo atual : `, moduloAtual)

// //              PRATICA GUIADA III

// const copiaEstudante = {
//     ...estudante
// }

// copiaEstudante.nome= `Astrodev`

// copiaEstudante.notasDoSemestre.push(9)
// copiaEstudante.modulo = 4

// console.log(copiaEstudante)





//                      EXERCICIO DE FICACAO

const carrinho = {
    nome: `Iago`,
    formaPagamento:`Debito`,
    endereco:`R. dos bobos`
}

carrinho.compras = {
    nomeDoProduto : `tabaco`,
    precoDoProduto : 840,
    quantidadeUnidadeComprada : 2
}

// console.log(carrinho)

console.log(carrinho.compras.quantidadeUnidadeComprada)

const carrinhoPresente = {
    ...carrinho
}
carrinhoPresente.nome = `Fofa`
carrinhoPresente.formaPagamento = `Cartao Presente`

console.log(carrinho, carrinhoPresente)
