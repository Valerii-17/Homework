import {
    call,
    put,
    takeEvery,
} from "redux-saga/effects";

import { API_URL } from "../constants";

import {
    setTodos,
    addTodoSuccess,
    deleteTodoSuccess,
    toggleTodoSuccess,
    editTodoSuccess,
    clearCompletedSuccess,
} from "../slices/todoSlice";

function fetchHelper(url, options) {
    return fetch(url, options).then(
        (response) => {
            if (!response.ok) {
                throw new Error("Request error");
            }

            return response.json();
        }
    );
}

function* loadTodosWorker() {
    try {
        const todos = yield call(
            fetchHelper,
            API_URL
        );

        yield put(setTodos(todos));
    } catch (e) {
        console.log(e);
    }
}

function* addTodoWorker(action) {
    try {
        const todo = yield call(
            fetchHelper,
            API_URL,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify(
                    action.payload
                ),
            }
        );

        yield put(
            addTodoSuccess(todo)
        );
    } catch (e) {
        console.log(e);
    }
}

function* deleteTodoWorker(action) {
    try {
        const deletedTodo = yield call(
            fetchHelper,
            `${API_URL}/${action.payload}`,
            {
                method: "DELETE",
            }
        );

        yield put(
            deleteTodoSuccess(
                deletedTodo.id
            )
        );
    } catch (e) {
        console.log(e);
    }
}

function* toggleTodoWorker(action) {
    try {
        const updatedTodo = yield call(
            fetchHelper,
            `${API_URL}/${action.payload.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    ...action.payload,
                    completed:
                        !action.payload.completed,
                }),
            }
        );

        yield put(
            toggleTodoSuccess(
                updatedTodo
            )
        );
    } catch (e) {
        console.log(e);
    }
}

function* editTodoWorker(action) {
    try {
        const currentTodo = yield call(
            fetchHelper,
            `${API_URL}/${action.payload.id}`
        );

        const updatedTodo = yield call(
            fetchHelper,
            `${API_URL}/${action.payload.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    ...currentTodo,
                    text: action.payload.text,
                }),
            }
        );

        yield put(
            editTodoSuccess(
                updatedTodo
            )
        );
    } catch (e) {
        console.log(e);
    }
}

function* clearCompletedWorker() {
    try {
        const todos = yield call(
            fetchHelper,
            API_URL
        );

        const completedTodos = todos.filter(
            (todo) => todo.completed
        );

        for (const todo of completedTodos) {
            yield call(
                fetchHelper,
                `${API_URL}/${todo.id}`,
                {
                    method: "DELETE",
                }
            );
        }

        yield put(
            clearCompletedSuccess()
        );
    } catch (e) {
        console.log(e);
    }
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