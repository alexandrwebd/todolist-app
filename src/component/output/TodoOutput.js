import React, {useContext} from 'react'
import classes from './TodoOutput.module.css'
import {TodolistContext} from "../../context/todolist/todolistContext";

export const TodoOutput = () => {

    const {tasksLocal} = useContext(TodolistContext)

    return (
        <div className={classes.TodosWrapper}>
            {
                tasksLocal.map((item, index) => (

                        <div className={classes.TodoItem} key={index + Math.random()}>
                            <div className={classes.Description}>{item.description}</div>
                            <div className={classes.Buttons}>
                                <input className={classes.BtnComplete} type="checkbox" onClick={() => {}} />
                                <button className={classes.BtnDelete} onClick={() => {}}>Delete</button>
                            </div>
                        </div>

                ))
            }
        </div>
    )
}