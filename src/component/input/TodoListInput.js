import React, {useContext} from "react";
import classes from './TodoListInput.module.css'
import {TodolistContext} from "../../context/todolist/todolistContext";


export const TodoListInput = () => {

const {setValue, inputValue} = useContext(TodolistContext)

    return (
        <div className={classes.inputWrapper}>
            <input
                type="text"
                id="description-task"
                value={inputValue}
                placeholder="Добавьте задачу"
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    )
}