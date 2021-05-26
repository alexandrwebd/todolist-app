import React, {useContext} from "react";
import classes from "./TodolistButton.module.css";
import {TodolistContext} from "../../context/todolist/todolistContext";

export const TodolistButton = () => {

    const {updateTasks} = useContext(TodolistContext)

    return (
        <div className={classes.ButtonWrapper}>
            <button id="add-task-btn" onClick={updateTasks}>Добавить</button>
        </div>
    )
}