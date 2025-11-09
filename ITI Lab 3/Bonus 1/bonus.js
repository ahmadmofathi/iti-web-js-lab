let table = document.querySelector(".factorialTable");
for(let i = 1; i <= 10; i++){
    let row = document.createElement("tr");
    let numCell = document.createElement("td");
    numCell.textContent = i;
    row.appendChild(numCell);
    let factCell = document.createElement("td");
    factCell.textContent = findFactorial(i);
    row.appendChild(factCell);
    table.appendChild(row);
}



function findFactorial(n){
    if(n === 0 || n === 1) return 1;
    let fact = 1;
    for(let i = 2; i <= n; i++){
        fact *= i;
    }
    return fact;
}

function promptFactorial(){
    let input = window.prompt("Enter a number to find its factorial:");
    if(input !== null && !isNaN(Number(input)) && Number(input) >= 0){
        let resultDiv = document.querySelector(".factorialResult");
        let num = Number(input);
        let factorial = findFactorial(num);
        alert("The factorial of " + num + " is " + factorial);
    } else {
        alert("Please enter a valid non-negative number.");
    }
}