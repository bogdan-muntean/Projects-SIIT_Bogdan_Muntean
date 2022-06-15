import React from "react";
import { updateTodo } from "./apiFunctions";

const Todo = props => {
        return(
        <div className="container-todos">
                <input type="checkbox" checked={props.todo.completed} 
                onClick={() => {  updateTodo(props.todo, props.todo.completed)      
                }}></input>
                <div onClick={() => props.deleteTodo(props.todo.id)}>{props.todo.name}</div>
        </div>
        )
}
function TodoList(props) {
        return (
                <ul>
                {props.todos.map(todo => (
                        <Todo todo={todo} key={todo.id} deleteTodo={props.deleteTodo}/>
                ))}
          </ul>
        )
}



// V2.0
// const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"]
// const Todo = props => <li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>;

// const TodoList = props =>(
        //         <ul>
        //             {props.todos.map(todo => (
//                     <Todo todo={todo} key={todo} deleteTodo={props.deleteTodo}/>
//                 ))}
//         </ul>
// );

//V1.0
// todos.map((todo) => {
//      <li onClick={() => deleteTodo(todo)}>{todo}</li>
// })

// const TodoList = props => {
//     return(
//         <ul>
//             {props.todos.map(todo => (
//                     <Todo todo={todo} key={todo}/>
//                 ))}
//         </ul>
//     )
// } 

export default TodoList