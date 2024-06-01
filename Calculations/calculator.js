// this function will be executed when the user clicks the "Calculate" button.
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Anything divided by Zero is undefined.';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Unknown operation';
        }
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
