// Homework todo server
// 1.	Sa afisam o lista de TODO items
var baseURL = "http://localhost:3000";
const boxTodosHtml = document.getElementById("todo-box");
const todoListHtml = document.getElementById("todo-list");

function displayTodos(){
var todoItems;
for(let i = 0; i < 3; i++){
    console.log("to do");
    // const listHtml = document.createElement("li");
    // listHtml.innerText = todoItems['todos'][i]['name'];
    // console.log(listHtml)
    // todoListHtml.innerHTML = listHtml;

fetch(`${baseURL}/todos/${i}`, {
    method: 'GET',
})
.then(function(response){
    console.log("Afisam lista de ToDo-uri");
    console.log(response);
    return response.json();
})
.then(function(todos){
    console.log("Lista de todo-uri este: ", todos[i]);
    // todoItems = todos;
})
}
}

displayTodos();


// 2.	Sa permitem adaugarea unui TODO
function addTodo(text){
    const newTodo = {
        name: text,
        completed: false
    };
    
    fetch(`${baseURL}/todos`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
}
// addTodo("cumparaturi");


// 3.	Sa stergem un TODO
// •	fiecare todo item are un button care permite stergerea
// •	folosim DELETE http://localhost:3000/todos/:id
// function deleteTodo(todoId){

// }
// deleteTodo(1);


// 4.	Se face update de un todo - check/uncheck
// •	utilizatorul poate sa faca check si uncheck din UI la un todo item
// •	folosim PUT http://localhost:3000/todos/:id + body



// 5.	Dupa fiecare modificare se face refresh la date pe UI
// Aplicatia va folosi serverul de todo din 08 week
