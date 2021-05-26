import React, {useReducer, useState, useEffect} from 'react'
import {TodolistContext} from "./todolistContext"
import {todolistReducer} from './todolistReducer'
import {GET_LOCAL, UPDATE_TASKS} from "../types";


export const TodolistState = ({children}) => {

    useEffect(() => {

            getLocal()


    }, [])

    const [inputValue, setValue] = useState('')



    const initialState = {
        tasks: [],
        tasksLocal: []
    }

    const [state, dispatch] = useReducer(todolistReducer, initialState)

    const {tasks, tasksLocal} = state

    const getLocal = () => {
        if (localStorage.tasks) {
            dispatch({type: GET_LOCAL, payload: JSON.parse(localStorage.getItem('tasks'))})
        }
    }



    // обновляет массив задач
    const updateTasks = () => {

        if (inputValue !== '') {
            dispatch({type: UPDATE_TASKS, payload: [...tasks, { description: inputValue, complited: false }]})
            updateLocal()
            getLocal()
            setValue('')
        }
    }

    //  обновляет данные в localStorage
    const updateLocal = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }


    return (
        <TodolistContext.Provider value={{tasks, inputValue, setValue, tasksLocal, updateTasks}}>
            {children}
        </TodolistContext.Provider>
    )
}