let runningTotal = '';
let buffer = '';
let operator = null;
let answer = 0;

const screen = document.querySelector(".screen");

function buttonClick(value) {
    isNaN(value) ? handleSymbol(value) : handleMath(value);
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch(symbol) {
        case 'C':
            runningTotal = '';
            buffer = '0';
            operator = null;
            answer = 0;
            break;
        case '←':
            if(buffer.length === 0) {
                return;
            } else if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            answer = parseInt(buffer);
            break;
        case '×':
            buffer = '×';
            operator = '*'
            break;
        case '÷':
            buffer = '÷';
            operator = '/';
            break;
        case '+':
            buffer = '+';
            operator = '+';
            break;
        case '−':
            buffer = '−';
            operator = '-';
            break;
        case '=':
            compute(operator);
            buffer = answer;
            break;
        case '.':
            operator = '.'
            break;
    }
}

function handleMath(number) {
    if((number === '0') && (buffer.length === 1) && (buffer === '0')) {
        return;
    } else if(operator !== null) {
        runningTotal += String(number);
        buffer = runningTotal;
    } else {
        if(buffer === '0') {
            buffer = '';
        }
        buffer += String(number); 
        answer = parseInt(buffer);
    }
}

function compute(symbol) {
    const newBuff = parseInt(buffer);

    dict = {
        '+': answer + newBuff,
        '-': answer - newBuff,
        '*': answer * newBuff,
        '/': answer / newBuff
    }
    answer = Math.floor(dict[symbol]);
    console.log(answer);
    operator = null;
    runningTotal = '';
}

function initializeInputs() {
    document.querySelector('.calc-buttons').addEventListener('click', (event) => {
        buttonClick(event.target.innerText);
    })
}

initializeInputs();
