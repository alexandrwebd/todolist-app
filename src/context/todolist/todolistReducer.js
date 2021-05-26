
const {UPDATE_TASKS, GET_LOCAL} = require("../types");


const handlers = {
    [UPDATE_TASKS]: (state, {payload}) => ({
        ...state,
        tasks: payload
    }),
    [GET_LOCAL]: (state, {payload}) => ({
        ...state,
        tasksLocal: payload
    }),

    DEFAULT: (state) => state
}

export const todolistReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}