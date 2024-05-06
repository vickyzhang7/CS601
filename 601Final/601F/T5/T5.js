var Human = /** @class */ (function () {
    function Human(eyeColor, height, gender, name) {
        this.eyeColor = eyeColor;
        this.height = height;
        this.gender = gender;
        this.name = name;
    }
    Human.prototype.sayHi = function () {
        if (this.name) {
            console.log("Hi, my name is ".concat(this.name, "."));
        }
        else {
            console.log("Hi there!");
        }
    };
    return Human;
}());
// Example usage:
var person1 = new Human("brown", 180, "male", "John");
person1.sayHi(); // Output: Hi, my name is John.
var person2 = new Human("blue", 170, "female");
person2.sayHi(); // Output: Hi there!
