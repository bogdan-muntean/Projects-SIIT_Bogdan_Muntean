// 2.	Sa permitem adaugarea unui TODO

const toDoButton = document.getElementById('input-button');


//Eveniment pe button, cand se face click, preluam valoarea din input
toDoButton.onclick = function(){
    const toDoInput = document.getElementById('input-text');
    
    const newTodo = {
        name: toDoInput.value,
        completed: false
    }

    postTodo(newTodo).then(function(){
        window.location.reload();
    })
}