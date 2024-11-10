function checkLeapYear() {
    let year = parseInt(document.getElementById("yearInput").value);

    let isLeapYear = false;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    }
    let resultText;
    resultText = isLeapYear ? `${year} is a leap year!` : `${year} is not a leap year.`;
    document.getElementById("result").textContent = resultText;
}
