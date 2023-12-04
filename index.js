
class Classes{
    constructor(tipo, ataque){
    
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let mago = new Classes("mago", "magia")
let guerreiro = new Classes("guerreiro", "espada")
let monge = new Classes("monge", "artes marciais")
let ninja = new Classes("ninja", "shuriken")
    
mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
    
