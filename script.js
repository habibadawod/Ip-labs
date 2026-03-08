let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let li = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        let span = document.createElement('span');
        span.textContent = taskText;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = '';
    }
});
