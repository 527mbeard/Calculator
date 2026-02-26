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
    if (op === '-') return '-'
    if (op === '*') return '×'
    if (op === '/') return '÷'
    return op
}

function updateScreen() {
    const display = document.getElementById('displayLine')
    const history = document.getElementById('historyLine')
    const status = document.getElementById('statusLine')
    
    if (typedNumberText !== '') {
        display.textContent = typedNumberText 
    }else {
        display.textContent = '0'
    }

    if (historyParts.length === 0) {
        history.textContent = ''
    }
    if (historyParts.length === 1) {
        history.textContent = historyParts[0]
    }
    if (historyParts.length === 2) {
        history.textContent = historyParts[0] + ' ' + showSymbol(historyParts[1])   
    }
    if (historyParts.length === 3) {
        history.textContent = historyParts[0] + ' ' + showSymbol(historyParts[1])+ ' ' + showSymbol(historyParts[2])
    }     
    if(status.textContent === '') {
        status.textContent = 'Ready'   
    }
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

function pressOperator(op) {
    setStatus("")

    if (typedNumberText === "" && storedNumber === null) {
        setStatus("Enter a number first!");
        updateScreen();
    }
    if (storedNumber === null) {
        storedNumber = Number(typedNumberText)
        currentOperator = op
        historyParts = [String(storedNumber), currentOperator]
        typedNumberText = ''
        updateScreen();
    } 
    if(typedNumberText !=='') {
        const secondNumber = typedNumberText
        if (currentOperator === '/' && secondNumber === '0') {
            setStatus("Cannot divide by zero!")
            updateScreen()
            return
        } 
    }
}

function clearAll() {
    typedNumberText = ''
    storedNumber = null
    currentOperator = ''
    historyParts = []
    setStatus('Cleared')
    updateScreen()
}   