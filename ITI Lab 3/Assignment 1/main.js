for(let i=0;i<5;i++){
    let div = document.createElement("div");
    div.innerText = `This is div number ${i+1}`;
    div.style.fontSize = `${20 + i * 5}px`;
    div.style.fontStyle = i%2?"bold":"italic";
    document.body.appendChild(div);
}