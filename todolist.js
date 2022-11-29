const addbutton =document.getElementById('liveToastBtn');
const inputtext = document.getElementById('task');
const todolist = document.getElementById('list')


//functions
addbutton.addEventListener('click',addTodo);
todolist.addEventListener('click',clearTodo);

//alerts
const alertWarning = document.querySelector('.alert-warning');

function addTodo(e){
    e.preventDefault();
    const isEmpty = str => !str.trim().length;
    if (isEmpty(inputtext.value)) {
       alertWarning.style.display = 'block';
        setTimeout(()=> {
            alertWarning.style.display = 'none';}, 1500);
        inputtext.value=" ";

    }else{
      //create todo div
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');

    //create todo li
    const todoLi = document.createElement('li');
    todoLi.innerHTML = inputtext.value;
    todoDIV.appendChild(todoLi);

    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('clearButton')
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todoDIV.appendChild(deleteButton);

    //append to list
    todolist.appendChild(todoDIV);

    //? clear todo input value
    inputtext.value = "";
    }
}

function clearTodo(e) {
    const item = e.target;
    
    if (item.classList[0] === 'clearButton') {
        const todo = item.parentElement;
        todo.remove();
    }
}











