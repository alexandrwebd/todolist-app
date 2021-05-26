import React from "react";
import classes from './App.module.css';
import {Todolist} from "./component/TodoList";
import {TodoOutput} from "./component/output/TodoOutput";
import {TodolistState} from "./context/todolist/todolistState";

function App() {
  return (
      <TodolistState>
        <div className={classes.flexWrapper}>
          <h1>ToDoList</h1>
            <Todolist/>
            <h2>Задача на день</h2>
            <TodoOutput/>
        </div>
      </TodolistState>
  )
}

export default App;
