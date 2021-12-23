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
const trimNumber = function (number, decimals = 5) {
    let indexDot = number.indexOf('.')
    let indexLast = number.length - 1
    if (indexDot == -1){
        return number
    } else {
        let decimalCount = indexLast - indexDot
        return String(
            Number(number).toFixed(
                Math.min(decimalCount,decimals)
            )
        )
    }
}

// display object will hold input information
// and update screen readings
theDisplay = {
    firstNumber: "",
    secondNumber: "",
    operation: "",
    screen: document.querySelector(".display"),

    updateMessage() {
        this.firstNumber = trimNumber(this.firstNumber)
        this.secondNumber = trimNumber(this.secondNumber)

        if (this.firstNumber == ""){
            return "0"
        }

        message = this.firstNumber
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

    reset(){
        this.firstNumber = ""
        this.secondNumber = ""
        this.operation = ""
    },

    calculate(){
        if (this.operation != "" && this.secondNumber != "") {
            n1 = Number(this.firstNumber)
            n2 = Number(this.secondNumber)
            switch (this.operation) {
                case "+":
                    this.firstNumber = add(n1, n2)
                    break;
                case "-":
                this.firstNumber = subtract(n1, n2)
                break;
                case "x":
                this.firstNumber = multiply(n1, n2)
                break;
                case "÷":
                this.firstNumber = divide(n1, n2)
                break;
                default:
                    break;
            }
            // transforming to string avoids problem downstream
            this.firstNumber = String(this.firstNumber)
            this.secondNumber = ""
            this.operation = ""
        }
    },

    delete(){
        removeLast = a => a.slice(0,a.length-1)
        if (this.secondNumber != ""){
            this.secondNumber = removeLast(this.secondNumber)
        } else if (this.operation != "") {
            this. operation = removeLast(this.operation)
        } else {
            this.firstNumber = removeLast(this.firstNumber)
            if (this.firstNumber == "-"){
                this.firstNumber = ""
            }
        }
    },

    newInput(input) {
        if (input == 'C') {
            this.reset()
        } else if (input == '←'){
            this.delete()
        }else if (input == '=') {
            this.calculate()
        } else if (isNumber(input)){
            if (this.operation == "") {
                this.firstNumber += input
            } else {
                this.secondNumber += input
            }
        } else if (isOperation(input) && this.operation == "") {
            this.operation = input
        }
        this.updateScreen()
    },
}

theDisplay.updateScreen()
