let title = document.querySelector(".title");
let list = document.querySelector(".list");

let prompt = window.prompt("Enter title for the list: 1(bullet) or 2(numbered), 3(lettered)");

if (prompt === "1") {
    title.textContent = "Bullet List";
    let items = ["Item 1", "Item 2", "Item 3"];
    let ul = document.createElement("ul");
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        ul.appendChild(li);
    }
    list.appendChild(ul);
} else if (prompt === "2") {
    title.textContent = "Numbered List";
    let items = ["Item 1", "Item 2", "Item 3"];
    let ol = document.createElement("ol");
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        ol.appendChild(li);
    }
    list.appendChild(ol);
} else if (prompt === "3") {
    title.textContent = "Lettered List";
    let items = ["Item 1", "Item 2", "Item 3"];
    let ol = document.createElement("ol");
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        ol.appendChild(li);
    }
    ol.type = "A";
    list.appendChild(ol);
}
else{
    title.textContent = "Invalid Input";
}