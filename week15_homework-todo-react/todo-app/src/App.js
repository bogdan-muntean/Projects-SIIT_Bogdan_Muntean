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
import {useEffect} from 'react'
import "./App.css";
import TodoList from './components/todoList';
import TodoForm from './components/TodoForm';
import {getTodos, postTodo, deleteTodoApi} from './components/apiFunctions'

function App(props){
  const [todos, setTodos] = React.useState([])  //hook pentru a actualiza todoList-ul

  const getApiData = async () => {            //aducem todoList-ul
    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos)
  }

  useEffect(() => {
    getApiData();
  }, []) //neoferind dependecy, ne asiguram ca se executa getApiData, o singura data
  //pentru fiecare page load
  
  const addTodo = todo => {
    postTodo(todo)
  }

  const deleteTodo = todoId => {
    deleteTodoApi(todoId)
  }

  return(
    <div className="App">
      <h1>Todo list</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
} 

export default App;




// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       todos: [response],
//       // todos: ["De terminat tema", "De spalat vasele", "De curatat in camera"],
//     };
//   };
//   response = fetch(
//     "https://jsonplaceholder.typicode.com/todos/"
//   ).then((response) => response.json());

// getApiData = async () => {
//   const response = await getTodos();
//   this.setState({
//     todos: [response]
//   })
// }

//   addTodo = todo => {
//     this.setState(prevState => ({
//       todos: [...prevState.todos, todo],
//     }))
//   }


//V1.0 delete todo din array, nu de pe server local
// const deleteTodo = value => {
//   const todosAfterDelete = (value) => {
//     todos.name.filter(todo => todo !== value)
//   }
//   setTodos(todosAfterDelete)
// }

//   deleteTodo = value => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo !== value),
//     }))
//   }

//   render(){
//     return(
//     <div className="App">
//       <h1>Todo list</h1>
//       <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
//       <TodoForm addTodo={this.addTodo}/>
//     </div>
//     );




