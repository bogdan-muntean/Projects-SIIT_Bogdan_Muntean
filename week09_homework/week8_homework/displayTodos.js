// Homework todo server
// 1.	Sa afisam o lista de TODO items
import {getTodos} from './api.js'
import './addTodo.js'
import createDeleteButton from './removeTodo.js'
import createCheckButton from './updateTodo.js'

getTodos().then(function(todos){
    const boxTodosHtml = document.getElementById("todo-box");
    const todoListHtml = document.getElementById("todo-list");

    //Cum ar trebui sa fac aici pentru a folosi .forEach() ?
    // todos.forEach((todos, i){       // NU
    // todos.forEach((todos, i) => {   // DA

    todos.forEach((todos, i) => {
        console.log(todos[i])
        //create <li> html
        const itemHtml = createTodoHtml(todos[i].name);
        //deleteBtn
        const deleteBtn = createDeleteButton(todos[i].id)
        itemHtml.appendChild(deleteBtn);
        todoListHtml.appendChild(itemHtml);
        //checkbox 
        const checkBtn = createCheckButton(todos[i])
        itemHtml.appendChild(checkBtn);
        todoListHtml.appendChild(itemHtml);
    })

    // for(let i = 0; i < todos.length; i++){      //Inainte de ES6
    // for(const todo of todos){                   //Dupa ES6
    
    for(const todo of todos){
        console.log(todos[i])
        //create <li> html
        const itemHtml = createTodoHtml(todos[i].name);
        //deleteBtn
        const deleteBtn = createDeleteButton(todos[i].id)
        itemHtml.appendChild(deleteBtn);
        todoListHtml.appendChild(itemHtml);
        //checkbox 
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


