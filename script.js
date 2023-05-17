const estudante = {
    nome: "Bárbara",
    sobrenome: "Santos",
    numeroMatricula:"98745",
    notasSemestre:[8,8,9.5]

}
estudante.modulo = 1
console.log(estudante.nome)
console.log(estudante.notasSemestre[1]);
console.log(estudante.modulo);

const copiaEstudante ={
    ... estudante,
    nome:"Astrodev",
    notasSemestre:[...estudante.notasSemestre,9],
    modulo:estudante.modulo+1

}

const estudantesLabenu = []
estudantesLabenu.push(estudante,copiaEstudante)
console.log(estudantesLabenu)

//lista com nomme,pagamento e endereço
const listaDeCompras = {
    nome: "Bárbara",
    formadePagamento: "Credito",
    endereco:"Rua Margarida machado"
}
//adicionar array de compras
listaDeCompras.compras = ["Airpods",250,1]
//imprima a quantidade de produtos
console.log(listaDeCompras.compras[2])
//criar uma copia carrinhoPresente e alterar pagamento e nome

const carrinhoPresente ={
    ...listaDeCompras,
    nome:'Ludmila',
    formadePagamento:"Cartão presente"
}
console.log(listaDeCompras);
console.log(carrinhoPresente);