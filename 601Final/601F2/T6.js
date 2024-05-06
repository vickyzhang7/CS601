function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

// Call outerFunction to get innerFunction
let myInnerFunction = outerFunction();

// Call the inner function
myInnerFunction(); // Output: "I am from outer function"

//In this example, outerFunction defines an inner function innerFunction.
//innerFunction has access to the variables defined in the outer function's scope (outerVariable), even after the outer function has finished executing. This is possible because of closures.
//When outerFunction is called, it defines outerVariable and then returns innerFunction.
//Even though outerFunction has finished executing, innerFunction maintains access to outerVariable, forming a closure.
//When myInnerFunction is called outside of outerFunction, it still has access to outerVariable, and it can log its value to the console. This demonstrates how closures work in JavaScript.



function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); // 2

  //In the example above, the function numberGenerator creates a local "free" variable num (a number) and checkNumber (a function that prints num to the console).

//The function checkNumber does not have any local variables of its own - however, thanks to the closure, it does have access to variables in the outer function numberGenerator.

//So even after numberGenerator returns, it can log its success to the console using the variable num declared in numberGenerator.