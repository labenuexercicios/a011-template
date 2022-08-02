// //Criando Objeto Estudante
// const estudante = {
//     nome: "Julian",
//     sobrenome: "Diel",
//     matricula: 250219,
//     notaSemestre : [8,10,9.5]
// }
//     console.log('Objeto Estudante', estudante);

// //Adicionando uma nova propriedade ao objeto

// estudante.modulo = 'HTML Semântico'
// console.log('Objeto estudante módulo:', estudante);

// // Imprimindo informações do objeto estudante

// console.log('Nome da pessoa Estudnte:', estudante.nome);
// console.log('Segunda nota do semestre:', estudante.notaSemestre[1]);

// console.log('Modulo Atual:', estudante.modulo);

// //Fazendo cópia do objeto estudante
// const copiaEstudante = {
//     ...estudante
// }
// console.log('Copia do objeto estudante:', copiaEstudante);

// //Alterando o valor da propriedade nome
// copiaEstudante.nome = 'Astrodev'
//     console.log('Copia com nome alterado:', copiaEstudante);

// // Adicionando a nota 9 as notas do semestre
// copiaEstudante.notaSemestre = [...
// copiaEstudante.notaSemestre, 9]
// console.log('Nova nota adicionada:', copiaEstudante);

// //Alterando o valor da propriedade modulo
// copiaEstudante.modulo = 'flexbox e grid'
// console.log('Copia com mudulo alterado:', copiaEstudante);

// //Criação do array estudantes Labenu
// const estudantesLabenu = []
// estudantesLabenu.push(estudante)
// estudantesLabenu.push()
// console.log('Array de estudantes da Labenu: ', estudantesLabenu)

//Exercicio de Fixação

const carrinho = {
    nome: 'Julian',
    pagamento: 'dinheiro',
    endereco: 'R. da Labenu'
};
console.log(carrinho);

carrinho.compras = [
    {Produto:"arroz",
    preco: 'R$: 5,00',
    quantidade: 1},

    {Produto:"feijao",
    preco: 'R$: 7,00',
    quantidade: 1},

    {Produto:"açucar",
    preco: 'R$: 3,00',
    quantidade: 1}
]
console.log('Quantidade de compras', carrinho.compras,' itens no carrinho')

const copiaCarrinho = {
        ...carrinho
    }
copiaCarrinho.nome = 'Lety';
copiaCarrinho.pagamento = 'Cartão Presente';
copiaCarrinho.endereco = 'R dos bobos, nº 0';

console.log('Cartão carrinho presente para:', copiaCarrinho);
