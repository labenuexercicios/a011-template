console.log('Bom dia')
// const objeto ={
//     chave1:'valor',
//     chave2: 3,
//     chave3: true,
//     chave4: ['Orci', 46, "Casado"],
//     chave5:{}
// };
// const estudante ={
//     nome:'Orci',
//     sobrenome: 'Santos',
//     matricula: '123456',
//     notas:[8,10,7]
// }
// console.log(estudante)
// estudante.modulo = "Modulo1"
// console.log(estudante)
// console.log(`Nome: ${estudante.nome} segunda nota: ${estudante.notas[1]} Módulo: ${estudante.modulo}`)

// const estudante2 = {...estudante,
//     nome: 'Ana',
//     matricula: 234567,
//     notas:[...estudante.notas,9]// espalhamento do array, pode usar o slice
// }
// console.log(estudante2)
// const estudanteLabenu=[]
// estudanteLabenu.push(estudante,estudante2)
// console.log(estudanteLabenu)
//2) Vamos adicionar mais uma propriedade ao nosso carrinho, o array de objetos chamado “compras”. 
const carrinho ={
        produto:'Banana',
        valor: 3.00,
        quantidade: 1,
        pagamento: ['cartao', 'dinheiro']
        
    };
console.log('Temos um total de ' + carrinho.pagamento.length + ' itens dentro de objeto formas de pagamento')
console.log('-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-')
const compras = [{nome: 'banana', preco: 3.00, quantidade: 4},{nome: 'abacate', preco: 5.00, quantidade: 1},{nome: 'manga', preco: 2.00, quantidade: 3}]
carrinho.compra = {...compras}
console.log(carrinho.compra[0])

// Cada objeto de compra deve possuir:
// o nome do produto
// o preço do produto
// a quantidade de unidades deste produto que serão compradas
//3) Imprima a quantidade de produtos dentro do array compras que existem no carrinho
// 4) Crie uma cópia do carrinho, chamada “carrinhoPresente”, que será igual ao carrinho original, mas com o nome da pessoa a ser presenteada, e a forma de pagamento alterada para cartão presente
// 5) Imprima ambos os carrinhos no console.


//console.log(`A quantidade de produtudo em carrinho.compras é ${carrinho.compras.length}`)
//carrinho.compra.push(compra) aqui cria  compra e joga

