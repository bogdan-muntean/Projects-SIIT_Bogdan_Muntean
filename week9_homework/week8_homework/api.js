// Aici tinem request-urile la server

//Preia todos de la server

const baseURL = "http://localhost:3000";

//Functia pentru 1. Aici aducem todo-urile din server
function getTodos(){
    return fetch(`${baseURL}/todos`)
        .then(function(response){
            return response.json()
        })
}

//Functie pentru 2. Cu ajutorul functiei createTodo trimitem catre 
//server todo-ul creat
function postTodo(newTodo){
    return fetch(`${baseURL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
}

//Functia pentru 4. Update todo
function updateTodo(todo, check) {
    const updateTodoId = todo.id;
    const newObjectTodo = todo;
    newObjectTodo.completed = !check;

    fetch(`${baseURL}/todos/${updateTodoId}`, {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(newObjectTodo)
    })
  }

  export {getTodos, postTodo, updateTodo}