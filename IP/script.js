// Get the elements
let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');

// Add task when button is clicked
addBtn.addEventListener('click', function() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Create list item
        let li = document.createElement('li');

        // Create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create span for text
        let span = document.createElement('span');
        span.textContent = taskText;

        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Mark as done when checkbox is checked
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });

        // Delete task when button is clicked
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Add elements to list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Add list item to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';
    }
});
