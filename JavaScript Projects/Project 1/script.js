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
        // get text value for the next task
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        // creating new task as object literal
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }

        // push the new task in array and render it and update local storage
        tasks.push(newTask);
        renderTask(newTask);
        saveTasks();

        todoInput.value = ""; // clear input field
    });

    // Display the tasks on Screen
    function renderTask(task) {
        // Creating an li for current task and append it into undordered list

        // create an li element for each task
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);

        li.innerHTML = `<span>${task.text}</span>
                        <button>delete</button>`;

        if (task.completed)
            li.classList.add("completed");

        // tasks are appened into the unordered list
        todoList.append(li);

        // Handling some events inside the render function to get task value using closure

        // if tasks are clicked means toggle the completed value
        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks();
        });

        // if delete button is clicked
        li.querySelector('button').addEventListener("click", (e) => {
            e.stopPropagation(); // prevent toggle from firing
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();
        });
    }

    // save tasks into local storage from the array 
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});