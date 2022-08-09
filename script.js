const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//cópia do objeto,trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const novoPokemon1 = {...pokemon1}

console.log(novoPokemon1)


const Pokemon2 = novoPokemon1.nome = "Squirtle"
const Pokemon3 = novoPokemon1.tipo = "Água"

//adicionando propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. 
Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1.ataques
const ataques = []
```text
nome: Investida;
dano: 40;
tipo: Normal;
precisao: 100;
const pokemon2. = pokemon1.push(ataques)
```

c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
pokemon1.push()

d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

f) Imprima os dois objetos no console.
