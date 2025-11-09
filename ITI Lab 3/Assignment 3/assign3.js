let nums = document.querySelector(".nums");
let data=[];
for (let i = 1; i <= 3; i++) {
    let prompt = window.prompt("Enter number " + i);
    if(prompt !== null && !isNaN(Number(prompt))){
        let num = document.createElement("div");
        num.textContent = "Number " + i + ": " + prompt;
        nums.appendChild(num);
        data.push(Number(prompt));
    }
}

let max = Math.max(...data);
let min = Math.min(...data);
let num = document.createElement("div");
num.textContent = "The Max Number is: " + max;
nums.appendChild(num);
num = document.createElement("div");
num.textContent = "The Min Number is: " + min;
nums.appendChild(num);

