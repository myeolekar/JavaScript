class Calculator {
    constructor() {

    }

    add(a, b) {
        const result = a + b;
        console.log(`The sum of ${a} and ${b} is ${result}`);
    }

    subtract(a, b) {
        const result = a - b;
        console.log(`The difference between ${a} and ${b} is ${result}`);
    }

    divide(a, b) {
        if (b === 0) {
            console.log("Error: Division by zero is not allowed");
            return;
        }

        const result = a / b;
        console.log(`The division of ${a} by ${b} is ${result}`);
    }
}

const calculator = new Calculator();
calculator.add(5, 3);
calculator.subtract(7, 2);
calculator.divide(10, 2);
calculator.divide(8, 0);   
