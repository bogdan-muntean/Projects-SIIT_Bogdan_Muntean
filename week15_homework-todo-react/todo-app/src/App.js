// To do app - Folositi concepte de es6 si react obligatoriu.
// Se foloseste servarul de la curs - 08 week/todo-server ( codul de la server nu trebui pus in PR de la tema)

//     Se aduce lista de todos de pe http://localhost:3000/todos metoda GET
//     Pentru a creea se face POST pe http://localhost:3000/todos
//     Pentru update se face PUT pe http://localhost:3000/todos
//     Pentru stergere se face DELETE pe http://localhost:3000/todos

// Un Todo item are trei proprietati: id - string text - string (aici vine textul , gen faceti temele) checked - boolean
// Cerinte:
//     Afisarea listei de TODO ( GET )
//     User poate sa adauge un todo item ( POST )
//     User poate sa sterga un todo item ( DELETE )
//     User poate sa poata bifa un todo, ( se face update la checked din false in true) ( PUT )
// Un exemplu de implementare, https://todolistme.net/

import React from 'react';
import "./App.css";
import TodoList from './components/todoList';
import TodoForm from './components/TodoForm';
// import * from './components/apiFunctions'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: ["De terminat tema", "De spalat vasele", "De curatat in camera"],
    };
  }

  addTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }))
  }

  deleteTodo = value => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo !== value),
    }))
  }

  render(){
    return(
    <div className="App">
      <h1>Todo list</h1>
      <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <TodoForm addTodo={this.addTodo}/>
    </div>
    );
  }
}


export default App;

// TO DO App
// w8 todo homework
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">

// </head>
// <body>
// <div id="input-box">
//     <label id="input-label" for="input-text"  class="input-tools">Introduce here your todo: </label>
//     <input id="input-text" type="text" class="input-tools">
//     <button id="input-button" class="input-tools"> Add todo</button>
// </div>
// <div id="todo-box">
//     <ul id="todo-list"></ul>
// </div>

// <script src="./api.js"></script>
// <script src="./addTodo.js"></script>
// <script src="./removeTodo.js"></script>
// <script src="./updateTodo.js"></script>
// <script src="./displayTodos.js"></script>
// </body>
// </html>




