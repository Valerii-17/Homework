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
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        toggleTodoSuccess: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id
                    ? action.payload
                    : todo
            );
        },

        editTodoSuccess: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id
                    ? action.payload
                    : todo
            );
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