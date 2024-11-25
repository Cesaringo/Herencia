class Animal {
    constructor(nombre, edad){
    this.nombre= nombre;
    this.edad= edad;

}
hacerSonido(){
    console.log("El animal hace un sonido");
}
}

class Perro extends Animal {
   
    constructor(nombre, edad){
        super(nombre, edad)
    }

    hacerSonido(){
        console.log("El perro ladra: ¡Guau!");
    }
}

const animal = new Animal("Animalito", 5);
animal.hacerSonido();

const perro = new Perro("Perrito", 5);
perro.hacerSonido();
