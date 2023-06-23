// prática guiada I
/*
const estudante = {
    nome: 'Belchior',
    sobremone: 'Peste',
    numeroDeMatricula: 7847874,
    notasDoSemestre: [6.5, 5, 7.8, 10, 8.8]
}

// prática guiada II
//Criando uma nova propriedade dentro do objeto estudante

estudante.modulo = 3

/*imprima no console a propriedade nome
imprima no console a segunda nota da pessoa no semestre
imprima o módulo em que a pessoa está*/
/*
const nomeDoEstudante = estudante.nome
console.log(`Nome do Estudante:`, estudante.nome)

const segundaNotaDoSemestre = estudante.notasDoSemestre[1]
console.log(`Segunda nota do semestre:`, segundaNotaDoSemestre)

const moduloAtual = estudante.modulo
console.log(`Módulo atual:`, moduloAtual)

// prática guiada III
// copiando o objeto original

const copiaEstudante = {
...estudante


}
 /*alterar o nome para Astrodev;
adicionar a nota 9 às notas do semestre;
alterar o módulo para o próximo módulo;
imprimir o objeto com as atualizações.*/
 /*copiaEstudante.nome = 'Astrodev'
 copiaEstudante.notasDoSemestre.push(9)
 copiaEstudante.modulo = 4

console.log(copiaEstudante)

const estudanteLabenu = []
estudanteLabenu.push(estudante, copiaEstudante)
console.log(`Array de estudante da Labenu:`, estudanteLabenu)

// copiando o objeto inicial e alterando as propriedades
/*
const copiaEstudante = {
    ...estudante,
    nome: 'Astrodev',
    modulo: 4,
    notasDoSemestre: [...estudante.notasDoSemestre, 9]
}

console.log(copiaEstudante)*/


const carrinho = {
    nome: 'Jordana',
    formaDePagamento: 'Pix',
    endereco: 'Serv. Laurindo Elias de Oliveira',
}
    carrinho.compras = [
        {
    nomeProduto: 'Doritos',
    preco: 13,
    quantidadeComprada:2
},
{
    nomeProduto: 'Veja',
    preco: 11,
    quantidadeComprada: 2
},
{
    nomeProduto:'Jibóia',
    preco:15,
    quantidadeComprada:1
}
 ]

console.log(carrinho)

const qtdadeProdutos = carrinho.compras.length
console.log(`Quantidade de produtos no carrinho:`, qtdadeProdutos)

    const carrinhoPresente = {
...carrinho,
nome: 'Cora',
formaDePagamento: 'Cartão Presente'
 }
 console.log(`Carrinho Original:`, carrinho)
 console.log(`Carrinho Presente:`, carrinhoPresente)

 // acessar o número de unidades compradas do terceiro produto

 const unidadesTerceiroProduto = carrinho.compras[2]
 console.log(unidadesTerceiroProduto)