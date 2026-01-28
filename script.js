document.getElementById("add").addEventListener("click", function () {
    let value = document.getElementById("typearea").value.trim();
    if (value === "") return;

    let eachtask = document.getElementById("eachtask");

    // Task box
    let taskbox = document.createElement("div");
    taskbox.classList.add("taskbox");

    // Task text
    let text = document.createElement("div");
    text.classList.add("taskText");
    text.innerText = value;

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.onclick = function () {
        taskbox.remove();
    };

    // Add elements
    taskbox.appendChild(delBtn);
    taskbox.appendChild(text);
    eachtask.appendChild(taskbox);

    // Clear input
    document.getElementById("typearea").value = "";
});
