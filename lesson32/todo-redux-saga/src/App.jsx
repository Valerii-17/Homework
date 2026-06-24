import { useEffect } from "react";
import {
    useDispatch,
    useSelector,
} from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

import "./App.css";

const App = () => {
    const dispatch = useDispatch();

    const todos = useSelector(
        (state) => state.todo.todos
    );

    useEffect(() => {
        dispatch({
            type: "LOAD_TODOS",
        });
    }, [dispatch]);

    return (
        <div className="container">
            <h1>Todo List</h1>

            <TodoForm />

            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                />
            ))}

            <button
                onClick={() =>
                    dispatch({
                        type: "CLEAR_COMPLETED",
                    })
                }
            >
                Clear Completed
            </button>

            <h3>
                Total todos: {todos.length}
            </h3>
        </div>
    );
};

export default App;