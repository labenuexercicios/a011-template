/*criação de objeto
const estudante = {
    nome: "alex", 
    sobrenome:"costa",
    matricula:40,
    semestre:[7,9,3,6]
}

// adicionando nova propriedade ao objeto
estudante.modulo="HTML E CSS"

// imprimindo informações do objeto estudante

console.log("Objeto estudante",estudante.semestre[1])

//fzendo copia do objeto estudante spread ou espalhamento

const copiaEstudante = {...estudante}

//alterar o nome da propriedade nome

copiaEstudante.nome= 'Astrodev'
//adicionado a nota 2 as notas do semestre

copiaEstudante.semestre.push(9.5)

//alterando o nome da propriedade modulo

copiaEstudante.modulo = 'flexbox e grid'

// criação do array estudanteLabenu

const estudanteLabenu =[]
estudanteLabenu.push("Estudante",estudante)
estudanteLabenu.push("Copia estudante",copiaEstudante)

console.log(estudanteLabenu)*/

const carrinho = {nome:"alex",formaPag:"pix",endereco:"brasil"}

carrinho.compras=[
    {
compras:"lapis",
preco:5.99,
quantidade:30
},
{
    compras:"tesoura",
    preco:19.99,
    quantidade:39
    },   
    {
        compras:"mochila",
        preco:20.99,
        quantidade:10
        }
]

const carrinhoPresente = {...carrinho}
carrinhoPresente.nome="Juliana"
carrinhoPresente.formaPag="cartão presente"

console.log("Objeto de compras",carrinho.compras[1])

console.log("Carrinho original",carrinho)

console.log("Copia carrinho",carrinhoPresente)


