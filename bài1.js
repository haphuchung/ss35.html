let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function renderTodos() {
    todoList.innerHTML = ""; 

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo;

        // Nút sửa
        const editBtn = document.createElement("button");
        editBtn.textContent = "Sửa";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => {
            let newTodo = prompt("Nhập công việc mới:", todo);
            if (newTodo) {
                todos[index] = newTodo;
                localStorage.setItem("todos", JSON.stringify(todos));
                renderTodos();
            }
        });
        
        // Nút xóa
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
            renderTodos();
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
        todoInput.value = "";
        renderTodos();
    }
});

renderTodos();