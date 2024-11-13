let numbers = [];

function trackUniqueNumbers() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (numbers.includes(number)) {
        numbers.sort((a, b) => a - b);
        document.getElementById('numberList').innerText = 'Duplicate found: ' + numbers.join(', ');
        numbers = [];
        return;
    }
    numbers.push(number);
}
