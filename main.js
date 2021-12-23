// event listeners
buttons = document.querySelectorAll('.button')
buttons.forEach(
    button => button.addEventListener('click', e => {
        theDisplay.newInput(e.target.textContent)
    })
);

// basic math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// aux functions
const isNumber = a => (a >= '0' && a <= '9');
const isOperation = a => '+-x÷'.includes(a);

// display object will hold input information
// and update screen readings
theDisplay = {
    firstNumber: "0",
    secondNumber: "",
    operation: "",
    screen: document.querySelector(".display"),

    updateMessage() {
        message = this.firstNumber;
        if (this.operation != "") {
            message += this.operation
        }
        if (this.secondNumber != "") {
            message +=  this.secondNumber
        }
        return message
    },

    updateScreen() {
        this.screen.textContent = this.updateMessage()
    },

    addNumber(oldNumber, newNumber) {
        if (oldNumber == "0") {
            return newNumber;
        } else {
            return oldNumber + newNumber;
        }
    },

    newInput(input) {
        if (input >= '0' || input <= '9'){
            if (this.operation == "") {
                this.firstNumber = this.addNumber(this.firstNumber, input)
            } else {
                this.secondNumber = this.addNumber(this.secondNumber, input)
            }
        } else if ('+-x÷'.includes(input)) {
            this.operation = input
        }
        this.updateScreen()
    },
}

theDisplay.updateScreen()
