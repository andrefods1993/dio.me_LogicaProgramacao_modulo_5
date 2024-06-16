/* 
*   3️⃣ Escrevendo as classes de um Jogo

    O Que deve ser utilizado

    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões
    - Funções
    - Classes e Objetos

*   Objetivo:

    Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

    - nome
    - idade
    - tipo (ex: guerreiro, mago, monge, ninja )

    além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:

    - exibir a mensagem: "o {tipo} atacou usando {ataque}")
    - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
    - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

    se mago -> no ataque exibir (usou magia)
    se guerreiro -> no ataque exibir (usou espada)
    se monge -> no ataque exibir (usou artes marciais)
    se ninja -> no ataque exibir (usou shuriken)

*   Saída

    Ao final deve se exibir uma mensagem:

    - "o {tipo} atacou usando {ataque}"
    ex: mago atacou usando magia
    guerreiro atacou usando espada
*/

// Define a classe Hero com propriedades nome, idade e tipo
class Hero {
	constructor(name, age, type) {
		this.name = name;
		this.age = age;
		this.type = type;
	}

	// Método que retorna uma mensagem de ataque baseada no tipo do herói
	attack() {
		switch (this.type) {
			case "mago":
				return `${this.type} atacou usando magia`; // Se o tipo for 'mago'
			case "guerreiro":
				return `${this.type} atacou usando espada`; // Se o tipo for 'guerreiro'
			case "monge":
				return `${this.type} atacou usando artes marciais`; // Se o tipo for 'monge'
			case "ninja":
				return `${this.type} atacou usando shuriken`; // Se o tipo for 'ninja'
			default:
				return `${this.type} atacou usando uma arma genérica`; // Para qualquer outro tipo
		}
	}
}

// Cria instâncias da classe Hero
const hero1 = new Hero("Gandalf", 600, "mago");
const hero2 = new Hero("Aragorn", 35, "guerreiro");
const hero3 = new Hero("Saruman", 140, "monge");
const hero4 = new Hero("Uzumaki", 47, "ninja");

// Loop para iterar sobre cada herói criado
for (let i = 1; i <= 4; i++) {
	// Usa eval para obter a referência do herói correspondente
	let hero = eval(`hero${i}`);
	console.log(`\nHeroi ${hero.name}:`); // Imprime o nome do herói
	console.log(hero.attack()); // Imprime a mensagem de ataque do herói
}
