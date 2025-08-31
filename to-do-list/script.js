let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value.trim() === "") {
        alert("⚠️ Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.classList.add("task");

        newEle.innerHTML = `
            <input type="checkbox" class="checkTask">
            <span class="taskText">${inputs.value}</span>
            <i class="fa-solid fa-trash-can deleteBtn"></i>
        `;

        text.appendChild(newEle);
        inputs.value = "";

        // ✅ Mark task as complete
        let checkbox = newEle.querySelector(".checkTask");
        let taskText = newEle.querySelector(".taskText");
        checkbox.addEventListener("change", () => {
            taskText.classList.toggle("completed");
        });

        // 🗑 Delete task
        let deleteBtn = newEle.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", () => {
            newEle.classList.add("fadeOut");
            setTimeout(() => newEle.remove(), 300);
        });
    }
}