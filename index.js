
class Classes{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log(`${this.nome}, o ${this.tipo} de ${this.idade} anos, atacou usando ${this.ataque}`)
    }
}

let mago = new Classes("Espazam", 595, "mago", "magia")
let guerreiro = new Classes("Wellzeras", 100, "guerreiro", "espada")
let monge = new Classes("LuckDay", 300, "monge", "artes marciais")
let ninja = new Classes("Gaiden", 45, "ninja", "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
    
