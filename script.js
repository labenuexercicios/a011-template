//criação de objeto
const estudante = {
    nome: "alex", 
    sobrenome:"costa",
    matricula:40,
    semestre:[7,9,3,6]
}

// adicionando nova propriedade ao objeto
estudante.modulo="HTML E CSS"

/* imprimindo informações do objeto estudante

console.log("Objeto estudante",estudante.semestre[1]) */

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

console.log(estudanteLabenu)
