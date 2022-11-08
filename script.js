const estudante = {
    nome: 'Rafaela',
    sobrenome: 'Guedes',
    matricula: 1586399,
    presenca: [2,6],
    notas: {
        algoritmo: 6,
        dados: 8
    },
}

/*
console.log(estudante.nome)

estudante.modulo = "Modulo 1"
console.log(estudante.modulo)

console.log(estudante.presenca[1])
*/

const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    nota: [...estudante.presenca,9],
    modulo: "HTML"
}
/*
console.log(novoEstudante)
*/

const estudantesLabenu = [estudante, novoEstudante]
/*
console.log(estudantesLabenu)

console.log(estudantesLabenu[0].nome)
*/


//Carrinho

const carrinho = {
    nome: "Jandira",
    formaPag: "A vista",
    endereco: "São Paulo",
    compras: [
        {
            nome: "Banana",
            preco: 6,
            quant: 2
         },
         {
            nome: "Ovos",
            preco: 18,
            quant: 30
         },
         {
            nome: "Tapioca",
            preco: 7,
            quant: 2
         }

    ]
}

quantidadeCompras = carrinho.compras.length

console.log(quantidadeCompras)


const carrinhoPresente = {
    ...carrinho
}

carrinhoPresente.nome = "Rafaela"
carrinhoPresente.formaPag = "Cartão Presente"

console.log(carrinho)
console.log(carrinhoPresente)


