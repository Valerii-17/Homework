import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] =
        useState(false);

    const [text, setText] = useState(
        todo.text
    );

    const saveEdit = () => {
        dispatch({
            type: "EDIT_TODO",
            payload: {
                id: todo.id,
                text,
            },
        });

        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                    dispatch({
                        type: "TOGGLE_TODO",
                        payload: todo,
                    })
                }
            />

            {isEditing ? (
                <input
                    value={text}
                    onChange={(e) =>
                        setText(e.target.value)
                    }
                />
            ) : (
                <span
                    style={{
                        textDecoration:
                            todo.completed
                                ? "line-through"
                                : "none",
                    }}
                >
                    {todo.text}
                </span>
            )}

            {isEditing ? (
                <button onClick={saveEdit}>
                    Save
                </button>
            ) : (
                <button
                    onClick={() =>
                        setIsEditing(true)
                    }
                >
                    Edit
                </button>
            )}

            <button
                onClick={() =>
                    dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id,
                    })
                }
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;