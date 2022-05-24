import React from "react";

const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"]

const Todo = props => <li>{props.todo}</li>;

function TodoList(){
    return(
        <ul>
            {todos.map(todo => (
                    <Todo todo={todo} key={todo}/>
                ))}
        </ul>
    )
} 
//https://www.boorje.com/react-todo-app/ separating components

export default TodoList