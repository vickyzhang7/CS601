class Human {
    eyeColor: string;
    height: number;
    gender: string;
    name?: string;

    constructor(eyeColor: string, height: number, gender: string, name?: string) {
        this.eyeColor = eyeColor;
        this.height = height;
        this.gender = gender;
        this.name = name;
    }

    sayHi(): void {
        if (this.name) {
            console.log(`Hi, my name is ${this.name}.`);
        } else {
            console.log("Hi there!");
        }
    }
}

// Example usage:
const person1 = new Human("brown", 180, "male", "John");
person1.sayHi(); // Output: Hi, my name is John.

const person2 = new Human("blue", 170, "female");
person2.sayHi(); // Output: Hi there!
