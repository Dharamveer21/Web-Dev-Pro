document.addEventListener('DOMContentLoaded', () => {
    // get all the areas where event happens
    const todoInput = document.getElementById('todo-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    // get tasks from local storage and render them first
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => renderTask(task));

    // get the new task added by user and put in array and render it
    addTaskButton.addEventListener("click", () => {
        const taskTest = todoInput.value.trim();
        if (taskTest === "") return;

        const newTask = {
            id: Date.now(),
            text: taskTest,
            completed: false
        }

        tasks.push(newTask);
        saveTasks();
        todoInput.value = ""; // clear input
        renderTask(newTask);
    });

    // Display the tasks on Screen
    function renderTask(task) {
        // create an li element for each task
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);

        li.innerHTML = `<span>${task.text}</span>
                        <button>delete</button>`;

        if (task.completed)
            li.classList.add("completed");

        // if tasks are clicked means toggle the completed value
        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks();
        });

        // if delete button is clicked
        

        // tasks are appened into the unordered list
        todoList.append(li);
    }

    // save tasks from array into local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});