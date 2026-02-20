// what the user is currently typing (as text)
let typedNumberText = ''

// the number we store for calculations
let storedNumber = null

//the operator currently selected
let currentOperator = ''

// used only for displaying the history line
let historyParts = []

//helper functions
function setStatus(message) {
    document.getElementById('statusLine').textContent = message
}

function showSymbol(op) {
    if (op === '-') return '&#x2212'
    if (op === '*') return '×'
    if (op === '/') return '÷'
    return op
}

function updateScreen() {
    const display = document.getElementById('displayLine')
    const history = document.getElementById('historyLine')
    const status = document.getElementById('statusLine')
    display.textContent = typedNumberText 
}

function pressNumber(digit) {
    setStatus('')
    if (typedNumberText === '0') {
        typedNumberText = digit
    } else {
        typedNumberText = typedNumberText + digit
    }
    updateScreen()
}

