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

//o input for limpar toda vez que adicionar uma nova tarefa 
function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createTask(textInput){
    const li = createLi();
    li.innerText = textInput;
    task.appendChild(li);
    clearInput()
}

btnTask.addEventListener('click', function(){
    if (!inputTask.value) return;
    createTask(inputTask.value);    //criou uma função para criar nova tarefa 
});

