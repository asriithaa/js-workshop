document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');

    // Create calculator container
    const calculator = document.createElement('div');
    calculator.className = 'calculator';
    app.appendChild(calculator);

    // Create display element
    const display = document.createElement('div');
    display.id = 'display';
    display.className = 'display';
    calculator.appendChild(display);

    // Create buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons';
    calculator.appendChild(buttonsContainer);

    // Define buttons and their properties
    const buttons = [
        { text: 'C', class: 'btn', action: 'clear' },
        { text: '⌫', class: 'btn', action: 'delete' },
        { text: '%', class: 'btn', value: '%' },
        { text: '/', class: 'btn operator', value: '/' },
        { text: '7', class: 'btn', value: '7' },
        { text: '8', class: 'btn', value: '8' },
        { text: '9', class: 'btn', value: '9' },
        { text: '*', class: 'btn operator', value: '*' },
        { text: '4', class: 'btn', value: '4' },
        { text: '5', class: 'btn', value: '5' },
        { text: '6', class: 'btn', value: '6' },
        { text: '-', class: 'btn operator', value: '-' },
        { text: '1', class: 'btn', value: '1' },
        { text: '2', class: 'btn', value: '2' },
        { text: '3', class: 'btn', value: '3' },
        { text: '+', class: 'btn operator', value: '+' },
        { text: '0', class: 'btn', value: '0' },
        { text: '.', class: 'btn', value: '.' },
        { text: '=', class: 'btn equal', action: 'calculate' }
    ];

    // Create and append buttons
    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = button.class;
        btn.innerText = button.text;

        if (button.action) {
            btn.setAttribute('data-action', button.action);
        }

        if (button.value) {
            btn.setAttribute('data-value', button.value);
        }

        buttonsContainer.appendChild(btn);
    });

    // Event listeners for buttons
    buttonsContainer.addEventListener('click', function(event) {
        const target = event.target;
        const action = target.getAttribute('data-action');
        const value = target.getAttribute('data-value');

        if (action === 'clear') {
            clearDisplay();
        } else if (action === 'delete') {
            deleteLast();
        } else if (action === 'calculate') {
            calculateResult();
        } else if (value) {
            appendToDisplay(value);
        }
    });

    function appendToDisplay(value) {
        display.innerText += value;
    }

    function clearDisplay() {
        display.innerText = '';
    }

    function deleteLast() {
        display.innerText = display.innerText.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = 'Error';
        }
    }
});

// function appendToDisplay(value) {
//     const display = document.getElementById('display');
//     display.innerText += value;
// }

// function clearDisplay() {
//     const display = document.getElementById('display');
//     display.innerText = '';
// }

// function deleteLast() {
//     const display = document.getElementById('display');
//     display.innerText = display.innerText.slice(0, -1);
// }

// function calculateResult() {
//     const display = document.getElementById('display');
//     try {
//         display.innerText = eval(display.innerText);
//     } catch {
//         display.innerText = 'Error';
//     }
// }

