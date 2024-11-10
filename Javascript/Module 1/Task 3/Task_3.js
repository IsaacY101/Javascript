let num1;
num1 = prompt("Enter the first integer:");
let num2;
num2 = prompt("Enter the second integer:");
let num3;
num3 = prompt("Enter the third integer:");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

let sum;
sum = num1 + num2 + num3;
let product;
product = num1 * num2 * num3;
let average;
average = sum / 3;

document.getElementById("sum").textContent = "Sum: " + sum;
document.getElementById("product").textContent = "Product: " + product;
document.getElementById("average").textContent = "Average: " + average;
