
//criando objeto
const estudante = {
    nome: 'Rafael',
    sobrenome: 'Machado',
    nomeDaMatricula: 3838,
    notasDoSemestre: [8,10],
}
//Lendo e adicionando nova propriedade a objetos
estudante.modulo = 'javascript' //adicionando ao objeto uma propriedade nova
estudante['modulo'] = 'javascript'  // acessando  e atribuindo a propriedade módulo

console.log(estudante.nome); // acessando a propriedade nome com anotação ponto
console.log(estudante['nome']); // acessando a propriedade nome com a anotação dos colchetes
console.log(estudante.notasDoSemestre[1]) //acessando a segunda posição do array com a anotação do ponto
console.log(estudante['notasDoSemestre'][1])// acessando a segunda posição do array com anotação do colchete
console.log(estudante.modulo) // acessando a propriedade modúlo

//copiar o objeto e alterar as propriedades
const novoEstudante = {
    ...estudante, // copiando usando com spread ...
    nome: 'Gabriel', // alterando a propriedade
    sobrenome: 'Martins', // alterando a propriedade
    notaDoSemestre: [...estudante.notasDoSemestre, 9], //copiando e acrescentando nota
    modulo: 'HTML'//alterando a propriedade
}
console.log(novoEstudante);

//criando array de objetos estudantes Labenu
const arrayEstudantes = [{...estudante},{...novoEstudante}, //COPIANDO objeto para dentro do array
{nome: 'Rafael', graduacao: 'Marketing'}, {nome: 'Gabriel',
graduacao: 'pedagocia'}] //array de objetos (copiando o objeto para dentro do array ...estudante)

/*const arrayEstudantes = [{estudante,novoEstudante}, // ADICIONANDO objeto dentro do array
{nome: 'Rafael', graduacao: 'Marketing'}, {nome: 'Gabriel',
graduacao: 'pedagocia'}]*/

console.log(arrayEstudantes)





