// Homework todo server
// 1.	Sa afisam o lista de TODO items
import './api'
import './addTodo'
import './removeTodo'
import './updateTodo'

getTodos().then(function(todos){
    const boxTodosHtml = document.getElementById("todo-box");
    const todoListHtml = document.getElementById("todo-list");

    for(let i = 0; i < todos.length; i++){
        console.log(todos[i])
        const itemHtml = createTodoHtml(todos[i].name);
        
        const deleteBtn = createDeleteButton(todos[i].id)
        itemHtml.appendChild(deleteBtn);
        todoListHtml.appendChild(itemHtml);
        const checkBtn = createCheckButton(todos[i])
        itemHtml.appendChild(checkBtn);
        todoListHtml.appendChild(itemHtml);

    }
    boxTodosHtml.appendChild(todoListHtml)
})



function createTodoHtml(text){
    const todoHtml = document.createElement("li")
    todoHtml.innerText = text;
    return todoHtml;
}



// 4.	Se face update de un todo - check/uncheck
// •	utilizatorul poate sa faca check si uncheck din UI la un todo item
// •	folosim PUT http://localhost:3000/todos/:id + body


// 5.	Dupa fiecare modificare se face refresh la date pe UI
// Aplicatia va folosi serverul de todo din 08 week


