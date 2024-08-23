function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.textContent += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    const value = parseFloat(display.textContent);
    if (!isNaN(value)) {
        display.textContent = value / 100;
    } else {
        display.textContent = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    const value = parseFloat(display.textContent);
    if (!isNaN(value)) {
        display.textContent = Math.sqrt(value);
    } else {
        display.textContent = 'Error';
    }
}
