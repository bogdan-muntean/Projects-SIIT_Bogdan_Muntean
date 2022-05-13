// Aici tinem request-urile la server

//Preia todos de la server

const baseURL = "http://localhost:3000";

//Functia pentru 1. Aici aducem todo-urile din server
async function getTodos(){
    const response = await fetch(`${baseURL}/todos`)
    const todos = await response.json();
    return todos

    // return fetch(`${baseURL}/todos`)
    //     .then(function(response){
    //         return response.json()
    //     })
}

//Functie pentru 2. Cu ajutorul functiei createTodo trimitem catre 
//server todo-ul creat
async function postTodo(newTodo){
    await fetch(`${baseURL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
}

//Functia pentru 4. Update todo
async function updateTodo(todo, check) {
    const updateTodoId = todo.id;
    const newObjectTodo = todo;
    todo.completed = !check;
    
    await fetch(`${baseURL}/todos/${updateTodoId}`, {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(newObjectTodo)
    })
  }

  export {getTodos, postTodo, updateTodo}