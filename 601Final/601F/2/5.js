// Define the Human class
class Human {
    // Constructor to initialize the attributes
    constructor(eyeColor, height, gender, name = null) {
        this.eyeColor = eyeColor; // Eye color of the human
        this.height = height; // Height of the human
        this.gender = gender; // Gender of the human
        this.name = name; // Name of the human (optional)
    }

    // Method to say Hi
    sayHi() {
        if (this.name) {
            console.log(`Hi, my name is ${this.name}.`);
        } else {
            console.log("Hi, I don't have a name.");
        } 
    }
}

// Create instances of the Human class
const person1 = new Human("brown", "180cm", "male", "John");
const person2 = new Human("blue", "165cm", "female");

// Invoke sayHi to test the method
person1.sayHi(); // Outputs: "Hi, my name is John."
person2.sayHi(); // Outputs: "Hi, I don't have a name."
