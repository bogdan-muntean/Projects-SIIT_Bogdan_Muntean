// 4.	Se face update de un todo - check/uncheck
// •	utilizatorul poate sa faca check si uncheck din UI la un todo item
// •	folosim PUT http://localhost:3000/todos/:id + body

function createCheckButton(todo){
    const checkButton = document.createElement("button")
    if(todo.completed === false){
        checkButton.innerHTML = "Uncheck";

        checkButton.onclick = function(){
            updateTodo(todo, false).then()
            checkButton.innerHTML = "Check";
        }
    }
    if(todo.completed === true){
        checkButton.innerHTML = "Check";

        checkButton.onclick = function(){
            updateTodo(todo, true).then()
            checkButton.innerHTML = "Uncheck";
        }
    }
    return checkButton;
}