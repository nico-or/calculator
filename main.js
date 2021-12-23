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
