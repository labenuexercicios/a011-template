//pratica guiada 1

/*const estudante = {
    nome: 'Cinthya',
    sobrenome: 'Evangelista',
    idAluno: 4452115,
    notasDoSemestre: [10, 9, 5, 9.5, 8]
}

//pratica guiada 2

estudante.modulo = 3

// pratica guida 3


console.log(estudante.nome)

console.log(estudante.notasDoSemestre[1])

// pratica guiada 4

/* const copiaEstudante =  {
    ...estudante

}

console.log(copiaEstudante)

copiaEstudante.nome = 'Astrodev'

console.log(copiaEstudante)

copiaEstudante.notasDoSemestre.push(3.5)

copiaEstudante.modulo = 4 */

/*const copiaEstudante = {
    ...estudante,
    nome: 'Astrodev',
    modulo: 4,
    notasDoSemestre: [...estudante.notasDoSemestre, 9]
}

console.log(copiaEstudante)

// exercicio 5

const estudantesLAbenu = []

estudantesLAbenu.push(estudante, copiaEstudante)

console.log(estudantesLAbenu) */

// exercicio de fixação

const carrinho = {
    nome: 'Cinthya',
    formaDePagamento: 'crédito',
    endereco: 'Rua vista alegre, 127 - Vista Alegre - Carapicuiba - SP',
}
    carrinho.compras = [
        {
            nomedoProduto: 'cerveja',
            preco: 5.79,
            quantidadeComprada: 10
        },

        {
            nomedoProduto: 'carne',
            preco: 39.00,
            quantidadeComprada: 1
        }

    ]
    

const quantidadeProdutos = carrinho.compras.length
//console.log('A quantidade de itens comprados:', quantidadeProdutos)

//4

const carrinhoPresente = {
    ...carrinho
}

carrinhoPresente.nome = 'Guilherme'
carrinhoPresente.formaDePagamento = 'dinheiro'

//console.log(carrinho)
//console.log(carrinhoPresente)


// extra: acessar o número de unidades compradas do 2 produto

const unidadesSegundoProduto = carrinho.compras[1].quantidadeComprada

console.log(unidadesSegundoProduto)


const somaDosProdutos = carrinho.compras[0].quantidadeComprada + carrinho.compras[1].quantidadeComprada

console.log(somaDosProdutos)
