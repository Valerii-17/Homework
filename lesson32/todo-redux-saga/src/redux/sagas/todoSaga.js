import {
    put,
    takeEvery,
    select,
} from "redux-saga/effects";

import {
    setTodos,
    addTodoSuccess,
    deleteTodoSuccess,
    toggleTodoSuccess,
    editTodoSuccess,
    clearCompletedSuccess,
} from "../slices/todoSlice";

function* loadTodosWorker() {
    const todos =
        JSON.parse(
            localStorage.getItem("todos")
        ) || [];

    yield put(setTodos(todos));
}

function* addTodoWorker(action) {
    yield put(addTodoSuccess(action.payload));

    const todos = yield select(
        (state) => state.todo.todos
    );

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function* deleteTodoWorker(action) {
    yield put(
        deleteTodoSuccess(action.payload)
    );

    const todos = yield select(
        (state) => state.todo.todos
    );

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function* toggleTodoWorker(action) {
    yield put(
        toggleTodoSuccess(action.payload)
    );

    const todos = yield select(
        (state) => state.todo.todos
    );

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function* editTodoWorker(action) {
    yield put(
        editTodoSuccess(action.payload)
    );

    const todos = yield select(
        (state) => state.todo.todos
    );

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function* clearCompletedWorker() {
    yield put(clearCompletedSuccess());

    const todos = yield select(
        (state) => state.todo.todos
    );

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

export function* watchTodos() {
    yield takeEvery(
        "LOAD_TODOS",
        loadTodosWorker
    );

    yield takeEvery(
        "ADD_TODO",
        addTodoWorker
    );

    yield takeEvery(
        "DELETE_TODO",
        deleteTodoWorker
    );

    yield takeEvery(
        "TOGGLE_TODO",
        toggleTodoWorker
    );

    yield takeEvery(
        "EDIT_TODO",
        editTodoWorker
    );

    yield takeEvery(
        "CLEAR_COMPLETED",
        clearCompletedWorker
    );
}