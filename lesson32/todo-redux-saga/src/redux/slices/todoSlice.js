import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },

        addTodoSuccess: (state, action) => {
            state.todos.push(action.payload);
        },

        deleteTodoSuccess: (state, action) => {
            state.todos.splice(action.payload, 1);
        },

        toggleTodoSuccess: (state, action) => {
            state.todos[action.payload].completed =
                !state.todos[action.payload].completed;
        },

        editTodoSuccess: (state, action) => {
            const { index, text } = action.payload;

            state.todos[index].text = text;
        },

        clearCompletedSuccess: (state) => {
            state.todos = state.todos.filter(
                (todo) => !todo.completed
            );
        },
    },
});

export const {
    setTodos,
    addTodoSuccess,
    deleteTodoSuccess,
    toggleTodoSuccess,
    editTodoSuccess,
    clearCompletedSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;