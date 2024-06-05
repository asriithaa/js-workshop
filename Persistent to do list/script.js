document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    loadTasks();

    // Event listener to add a task
    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            saveTasks();
            taskInput.value = '';
        }
    });

    // Event listener to delete or edit task
    taskList.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('delete')) {
            target.parentElement.remove();
            saveTasks();
        } else if (target.classList.contains('edit')) {
            const newText = prompt('Edit your task:', target.previousElementSibling.textContent);
            if (newText !== null && newText.trim() !== '') {
                target.previousElementSibling.textContent = newText.trim();
                saveTasks();
            }
        }
    });

    // Function to add a task
    function addTask(taskText) {
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        listItem.appendChild(taskSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        const taskItems = taskList.getElementsByTagName('li');
        for (let i = 0; i < taskItems.length; i++) {
            tasks.push(taskItems[i].querySelector('span').textContent);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => addTask(task));
        }
    }
});
