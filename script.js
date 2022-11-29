const aluno = {
    nome: "Gabriel",
    sobrenome: "Garuthi" , 
    matricula: 3214567 ,
    idade: 17,
    nota: [6, 8, 10]
}

aluno.modulo = "Modulo 1"
console.log("Nome:", aluno.nome)
console.log("Segunda nota:", aluno.nota[1])
console.log("Modulo:", aluno.modulo)


const novoaluno = {//struct copia strct sem alterar seus valores originais
    ...aluno,
    nome : "Astrodev",
    nota:[...aluno.nota, 9],
    modulo: "Modulo 2"

}
//novoaluno.nota.push(9) - altera na struct original

console.log("Nova Struct", novoaluno)

const estudantelabenu =[aluno, novoaluno]//array recebe struct

console.table(estudantelabenu)

const itensdacompra1 = {
    nomedoproduto: "Macarrão",
    precodoproduto: 50,
    quantidadedoproduto: 3 
}

const itensdacompra2 = {
    nomedoproduto: "Feijão",
    precodoproduto: 20,
    quantidadedoproduto: 4 
}

const carrinho = {
    nome : "João",
    forma : "Cartão",
    endereco : "Rua Para, 321, Alagoas",
    compras : [itensdacompra1, itensdacompra2],
    compras2 : [{item: "macarrao", preco : 20, quantidade : 3}, {item: "iorgut", preco: 5, quantidade: 7}]
}

const presente = {
    ...carrinho,
    nome: "Julinho",
    forma: "Cartão presente"
}

console.table(presente)
console.table(carrinho.compras[0])
console.table(carrinho.compras2[1])
