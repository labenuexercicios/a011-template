//exercicio de fixação 

const carrinho = {
    comprador: "Marcos",
    formaPgto: "Crédito",
    end: "Rua João Soares Padilha, 21",
}
console.log('original:', carrinho)

carrinho.compras = ['café', 20.50, 2]

console.log('Alterado com adição das compras', carrinho)
console.log('Quantidade',[2])

const carrinhoPresente = {...carrinho}
console.log('copia', carrinhoPresente)

carrinho.comprador = "Berg";
carrinho.formaPgto = "cartão presente";
console.log('Cópia alterada', carrinho)