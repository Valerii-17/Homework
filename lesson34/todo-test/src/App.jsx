import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";




const App = () => {
    const todos = useSelector(
        (state) => state.todo.todos
    );

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

            <h3>
                Total todos: {todos.length}
            </h3>
        </div>
    );
};

export default App;