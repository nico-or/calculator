// display object will hold input information
// and update screen readings
theDisplay = {
    firstNumber: "0",
    secondNumber: "",
    operation: "",
    screen: "",
    update() {
        this.screen = "";
        if (this.firstNumber) this.screen += `${this.firstNumber}`;
        if (this.operation) this.screen += ` ${this.operation}`;
        if (this.secondNumber) this.screen += ` ${this.secondNumber}`;
        return this.screen
    }
}

// basic math functions
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

// numeric buttons event listeners
buttons = document.querySelectorAll('.button.number')
buttons.forEach(
    button => button.addEventListener('click', e => {
        console.log(e.target.textContent)
    })
);
