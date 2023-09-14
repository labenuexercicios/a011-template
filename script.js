function imprimirObjeto () {
    //digite a sua solução aqui
    const estudante = {
        nome: "Raissa",
        sobrenome: "Gomes",
        numeroDaMatricula : 30392839,
        notasDoSemestre: [10, 7, 8]
    };
    estudante.modulo = "Javascript";
    console.log(estudante.nome);
    console.log(estudante.notasDoSemestre[1])
    console.log(estudante.modulo);

    const NovoEstudante = {
        ...estudante,
        nome: "Astrodev",
        notasDoSemestre: [10, 7, 8, 9],
        modulo: "HTML"

    }
 
     console.log(NovoEstudante)

    estudantesLabenu = {
        ...estudante,
        ...NovoEstudante
    }

    console.log(estudantesLabenu);

}


imprimirObjeto()