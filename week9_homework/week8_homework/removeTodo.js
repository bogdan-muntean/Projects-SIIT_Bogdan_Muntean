// 3.	Sa stergem un TODO
// •	fiecare todo item are un button care permite stergerea
// •	folosim DELETE http://localhost:3000/todos/:id

//Cream butonul de delete si functia pentru el
const baseURL = "http://localhost:3000";

function createDeleteButton(todoId){
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete";

    deleteButton.onclick = function(){
        fetch(`${baseURL}/todos/${todoId}`,{
            method: "DELETE",
        }).then(function(){
            location.reload();
        })
    }
    return deleteButton;
}

export default createDeleteButton