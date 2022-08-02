// //propriedades sao constituidas por chave e valor
// const estudante = {
//     nome: "Christhian",
//     sobrenome: "Brandão",
//     nomeDaMatricula: 1057,
//     notasDoSemestre: [9.9, 10],
// }


// estudante.modulo = 'javascript'
// estudante['nivel'] = "beginner"


// console.log(estudante.nome)
// console.log(estudante)
// console.log(estudante.notasDoSemestre[1])
// console.log(estudante.modulo)


// const copiaEstudante = {
//     ...estudante,
//     nome: 'astroDev',
//     notasDoSemestre: [...estudante.notasDoSemestre, 9.8],
//     modulo: "HTML"
// }
// /*copiou tudo que tinha na proprieedade notas do semestre e adicionou o numero 9.8 */
// console.log(astroDev)


// //const arrayEstudantesLabenu = [{...estudante}, {...copiaEstudante}]

// const arrayEstudantesLabenu = [estudante, copiaEstudante]

const carrinho = {
    nome: 'chris',
    formaDePagamento: 'credito',
    endereço: 'SBO',
}
console.log(carrinho)

carrinho.compras = [{
    nome:"batata",
    preço: 4,
    quantidade : 7},
    {
    nome: "ração",
    preço: 19,
    quantidade:2
    }, 
    {
    nome: "ovomaltine",
    preço: 17,
    quantidade:1},
 {
    nome: "chocolate",
    preço: 10,
    quantidade:3}]


console.log(carrinho)
console.log("seu carrinho tem:",carrinho.compras.length,"itens")

const carrinhoPresente = {
    ...carrinho,
    nome: "gabrielle",
    formaDePagamento: "cartão presente"
}
console.log(carrinhoPresente)
/**/ 