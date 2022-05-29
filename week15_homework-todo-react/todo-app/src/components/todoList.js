import React from "react";


const Todo = props => {
        return(
        <li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>
        // <button onClick={props.onClickProduct}>Check</button>
        )
}


function TodoList(props) {
        return (
                <ul>
                {props.list.map(todo => (
                        <Todo todo={todo} key={todo} deleteTodo={props.deleteTodo}/>
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