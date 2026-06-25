import { useDispatch } from "react-redux";
import { deleteTodo } from "../slices/todoSlice";

const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch();

    return (
        <div className="todo-item">
            <span>{todo}</span>

            <button
                onClick={() =>
                    dispatch(deleteTodo(index))
                }
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;