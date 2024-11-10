let userName;
userName = prompt("Please enter your name:");

if (userName) {
    document.getElementById("greeting").textContent = "Hello, " + userName + "!";
} else {
    document.getElementById("greeting").textContent = "Hello, Stranger!";
}
