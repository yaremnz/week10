class Animal { // BASE Class - noun (person place or thing)
    constructor(kind, noise){ //parameters to new
        this.kind = kind    //Properties a variable inside 
        this.noise = noise
    }
    speak(){ //METHOD a function inside an object 
        return `the ${this.kind} goes ${this.noise}.`
    }
}
let dino = new Animal ("t-rex", "roar"); // cereating a new intance of animal 
console.log( dino.speak() ) // calling method on the instance  

let animal2 = new Animal("cat", "meow");
console.log( animal2.speak() );

class Pet extends Animal{ // pet IS_A animal 
    constructor(name, kind, noise){
        super(kind, noise); // call parent constructor
        this.name = name;
    }
    speak(){
        return `${this.name} the ${this.kind} goes ${this.noise}.`
    }
} 
class Cat extends Pet{
    constructor(name){
        super(name, "cat", "meow")
    }
} 

let animals = [
    new Cat("Bianca"),
    new Cat("Oreo"),
    new Cat("Salem"),
    new Animal("lion", "roar"),
    new Animal("bunny rabbit", "chitter")
] // end animal list 

animals.forEach(animal => console.log(animal.speak()));
console.log(animals.map(a=>a.speak()).join("\n"));

// bianca = new Cat("Bianca")
// console.log( bianca.speak() )

// oreo = new Cat("Oreo")
// console.log( oreo.speak() )

// salem = new Cat("Salem")
// console.log( salem.speak() )