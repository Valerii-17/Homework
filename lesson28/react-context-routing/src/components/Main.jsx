import {useState} from "react";

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    function addTodo() {
        if (!text.trim()) return;

        setTodos([...todos, text]);
        setText("");
    }

    function deleteTodo(index) {
        const updatedTodos = todos.filter((todo, i) => {
            return i !== index;
        });

        setTodos(updatedTodos);
    }


    return (
        <div>
            <h2>Todo List</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task"
            />

            <button onClick={addTodo}>
                Add
            </button>

            {todos.map((todo, index) => (
                <div key={index}>
                    {todo}

                    <button
                        onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            ))}

        </div>
    );
};


export default Main;