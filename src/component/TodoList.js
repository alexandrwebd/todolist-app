import React from 'react'
import classes from './TodoList.module.css'
import {TodoListInput} from "./input/TodoListInput";
import {TodolistButton} from "./button/TodolistButton";

export const Todolist = () => {
    return (
        <div className = {classes.todolistWrapper}>
            <TodoListInput/>
            <TodolistButton/>
        </div>
    )
}