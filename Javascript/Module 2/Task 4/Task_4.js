let numbers = [];
function addAndSortNumbers() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (number === 0) {
        numbers.sort((a, b) => b - a);
        document.getElementById('numberList').innerText = numbers.join(', ');
        numbers = [];
    } else {
        numbers.push(number);
    }
}
