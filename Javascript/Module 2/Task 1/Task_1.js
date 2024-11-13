function reverseNumbers() {
    let numbers = [
        document.getElementById('num1').value,
        document.getElementById('num2').value,
        document.getElementById('num3').value,
        document.getElementById('num4').value,
        document.getElementById('num5').value
    ];
    let output = '';
    for (let i = numbers.length - 1; i >= 0; i--) {
        output += numbers[i] + '<br>';
    }

    document.getElementById('reversedNumbers').innerHTML = output;
}
