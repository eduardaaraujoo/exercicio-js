const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const task = document.querySelector('.task');


function createLi(){
    const li = document.createElement('li');
    return li; 
}

//toda vez que add tarefa no input, eu quero pegar esse evento.
inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13){
        if (!inputTask.value) return;
        createTask(inputTask.value); 
    }
});


//função para criar botão para apagar as tarefas
function createDeleteButton (li){
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('class', 'delete');
    li.appendChild(deleteButton);
}

//o input for limpar toda vez que adicionar uma nova tarefa 
function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createTask(textInput){
    const li = createLi();
    li.innerText = textInput;
    task.appendChild(li);
    clearInput();
    createDeleteButton(li);
    saveTasks();
}

btnTask.addEventListener('click', function(){
    if (!inputTask.value) return;
    createTask(inputTask.value);    //criou uma função para criar nova tarefa 
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('delete')){
        el.parentElement.remove();
    }
});

function saveTasks(){
    const liTasks = tarefas.querySelectorAll('li');
    console.log(liTasks)
}