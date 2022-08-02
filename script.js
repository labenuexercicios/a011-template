// criaçao do objeto estudante 
// const estudante = {
//     nome: "Carlos",
//     sobrenome: "Eduardo",
//     matricula: 4519952,
//     notasSemestre: [7, 9.5, 8]
// }

// console.log("Objeto estudante:" ,estudante);

// // adicionando nova propriedade ao objeto 

// estudante.modulo = "Javascript"
// console.log("Objeto estudante com Módulo:", estudante);

// // imprimindo informações do objeto estudante 

// console.log("Nome da pessoa estudante:", estudante.nome);
// console.log("Segunda nota do semestre:", estudante.notasSemestre[1]);
// console.log("Módulo atual:", estudante.modulo);

// // fazendo cópia do objeto estudante

// const copiaEstudante = {...estudante}
// console.log("Cópia do objeto estudante", copiaEstudante);

// // alterando o valor das propriedades

// copiaEstudante.nome = 'Astrodev'
// console.log("cópia com nome alterado:", copiaEstudante);

// // adicionando a nota
// // copiaEstudante.notasSemestre.push(9); 
// copiaEstudante.notasSemestre = [...copiaEstudante.notasSemestre, 9];
// console.log("Cópia com nota adicionada:", copiaEstudante);

// // alterando o módulo
// copiaEstudante.modulo = "Flexbox e Grid"
// console.log(copiaEstudante);

// // criação do array estudantes: Labenu

// const estudantesLabenu = []
// estudantesLabenu.push(estudante)
// estudantesLabenu.push(copiaEstudante);
// console.log("Array de estudantes da Labenu:", estudantesLabenu);

// Exercício de fixação

const carrinho = {
    nome: "Carlos",
    pagamento: "Débito",
    endereco: "Rua A, 79, Centro"
}
carrinho.compras = []
console.log(carrinho);
carrinho.compras.push ({
    nomeProduto: "Batata",
    preco: 2,
    Quantidade:4
})
carrinho.compras.push({
    nomeProduto: "Morango",
    Preco:10,
    Quantidade:12
})
carrinho.compras.push({
    nomeProduto: "Arroz",
    Preco: 5,
    Quantidade:3
})
console.log(carrinho);
console.log(`Quantidade de itens: ${carrinho.compras.length}`);

const copiaCarrinho = {...carrinho};
copiaCarrinho.nome = "Danilo"
copiaCarrinho.pagamento = "Cartão presente"
console.log(copiaCarrinho);