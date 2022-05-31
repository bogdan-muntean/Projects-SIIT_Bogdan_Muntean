//fetch TODO GET
//POST
//DELETE

const baseURL = "http://localhost:4000";

async function getTodos(){
    const response = await fetch(`${baseURL}/todos`)
    const todoList = await response.json()
    return todoList
}

async function postTodo(newTodo){
    return fetch(`${baseURL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    }).then(() => window.location.reload())
}

async function deleteTodoApi(todoId){
    return fetch(`${baseURL}/todos/${todoId}`,{
        method: "DELETE",
    }).then(() => window.location.reload())
}

async function updateTodo(todo, check){
    const newTodo = todo;
    todo.completed = !check

    await fetch(`${baseURL}/todos/${todo.id}`,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(newTodo)
    }).then(() => window.location.reload())
}

export {getTodos, postTodo, deleteTodoApi, updateTodo}
// update for check/uncheck
// export function updateTodo(todo, check) {
//     const updateTodoId = todo.id;
//     const newObjectTodo = todo;
//     newObjectTodo.completed = !check;

//     fetch(`${baseURL}/todos/${updateTodoId}`, {
//     method: "PUT",
//     headers: {
//         'Content-Type': 'application/json' 
//     },
//     body: JSON.stringify(newObjectTodo)
//     })
//   }

// get todo from server
// V2.0
// function getTodos(){
    //     fetch(baseURL)
//     .then(response => {
//         if(response.ok){
    //             return response.json()
    //         }
    //         throw response
    //     })
    // }
    //V1.0
// export function getTodos(){
    //     return fetch(`${baseURL}/todos`)
//         .then(response => response.json())
// }

//post todo on server 
// export function postTodo(newTodo){
//     return fetch(`${baseURL}/todos`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newTodo)
//     })
// }

// delete todo
// export function deleteTodo(todoId){
//         fetch(`${baseURL}/todos/${todoId}`,{
//             method: "DELETE",
//         }).then(() => location.reload();)
// }
