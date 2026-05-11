//Encapsulation 1

class Animal {
    constructor(name) {
        this._name = name; // Private property
    } 
    speak() {
        console.log(`${this._name} makes a sound.`);
    }
}

const dog= new Animal("Jhonny");
const cat= new Animal("Kitty");

dog.speak();
cat.speak();
