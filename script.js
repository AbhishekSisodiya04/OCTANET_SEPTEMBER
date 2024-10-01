document.getElementById('addTaskBtn').addEventListener('click',addTask);

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if(taskText ===''){
        alert('please enter a task!');
        return;
    }
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML=`
    <span class="task-text">${taskText}</span>
     <div>
         <button class"edit-btn" onclick="editTask(this)">Edit</button>
         <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
         <input type="checkbox" onchange="toggleComplete(this)">
    </div>
    `; 
    taskList.appendChild(li);
    taskInput.value = ' ';
}

function editTask(button){
    const taskText = button.parentElement.previousElementSiblings;
    const newTask = prompt('Edit your task:',tasktext.textContent);
     
    if(newtask !== null && newTask.trim() !==''){
        taskText.taskContent = newTask.trim();
    }
}
 function deleteTask(button){
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement.parentelement);
 }

 function toggleComplete(checkbox){
    const taskText= checkbox.parentElement.previousElementsSiblings;
    taskText.classList.toggle('completed', checkbox.checked);
 }