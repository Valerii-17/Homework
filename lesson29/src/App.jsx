import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos((prevTodos) => [...prevTodos, task]);
    };

    const deleteTodo = (index) => {
        setTodos((prevTodos) =>
            prevTodos.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="container">
            <h1>Todo List</h1>

            <TodoForm addTodo={addTodo} />

            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default App;