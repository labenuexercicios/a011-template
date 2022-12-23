
const estudante = {
    nome: "Isaias",
    sobrenome: "Araújo",
    matricula: "045759",
    notasDoSemestre: [8, 9.5, 8.2, 9],
}

estudante.modulo = "1", //adiconando uma propriedade ao objeto

console.log(estudante)
console.log("Nome:",estudante.nome) // valor nome do objeto
console.log("Segunda nota",estudante.notasDoSemestre[1]) //segunda posição do array do objeto
console.log("Modulo:", estudante.modulo) // valor da nova propriedade adicionada


const novoEstudante = {
    ...estudante,

}

novoEstudante.nome = "Astrodev"
novoEstudante.notasDoSemestre = [...estudante.notasDoSemestre,10]

console.log(novoEstudante)

const estudantesLabenu = []
estudantesLabenu.push(estudante,novoEstudante)
console.log(estudantesLabenu)

const carrinho = {
    nome: "Carlos", 
    pagamento: "Crédito",
    endereço: "Rua João Soares Padilha",

}

carrinho.compras = ["Brioche", "2.50", "10"]
console.log(carrinho)
console.log(carrinho.compras[2])

const carrinhoPresente = {...carrinho}
carrinhoPresente.nome = "Berg"
carrinhoPresente.pagamento = "Cartão presente"
console.log(carrinhoPresente)