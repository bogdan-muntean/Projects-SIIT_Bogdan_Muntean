import React from 'react';
import "./App.css";
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoList />
    </div>
  );
}

export default App;

// TO DO App
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