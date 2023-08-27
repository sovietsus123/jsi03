const todos = [
    {
      "id": 1,
      "title": "Do homework",
      "completed": false
    },
    {
      "id": 2,
      "title": "code",
      "completed": false
    },
    {
      "id": 3,
      "title": "sadash",
      "completed": false
    },
    {
      "id": 4,
      "title": "oasid",
      "completed": true
    },
    {
      "id": 5,
      "title": "sjdadjsado",
      "completed": false
    },
  ]

const todolistelm = document.getElementById('todos-list')
const handleDeleteTodo = (deleteId) => {
    const deleteIndex = todoList.findIndex((todo) => todo.id === deleteId);
    todolistelm.splice(deleteIndex, 1);
    renderTodoList();
}
const renderTodoList = () => {
    todolistelm.innerHTML = "";
    todoList.forEach((todo) => {

    })
}
todos.forEach((todo) =>{
    const todoelm = document.createElement('div');
    todoelm.classList.add('todo');
    const inputelm = document.createElement('input');
    inputelm.setAttribute('type','checkbox');
    const spanelm = document.createElement('span');
    spanelm.textContent = todo.title;
    const iconelm = document.createElement('i');
    iconelm.classList.add("bi","bi-trash3-fill");
    todoelm.appendChild(inputelm);
    todoelm.appendChild(spanelm);
    todoelm.appendChild(iconelm);
    todolistelm.appendChild(todoelm);
});
const saveLocalStorage = (() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
})
const getLocalStorage = () => {
    const todoListLocal = JSON.parse(localStorage.getItem('todos'));
    if (todoListLocal) {
        todoList = todoListLocal;
    }
}
