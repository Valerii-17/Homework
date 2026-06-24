import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const TodoForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch({
            type: "ADD_TODO",
            payload: {
                text: data.task,
                completed: false,
            },
        });

        reset();
    };

    return (
        <div className="form-wrapper">
            <form
                className="todo-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="todo-input"
                    placeholder="Enter task"
                    {...register("task", {
                        required: "Field is required",
                        minLength: {
                            value: 5,
                            message: "Minimum 5 characters",
                        },
                    })}
                />

                <button type="submit">
                    Add
                </button>
            </form>

            {errors.task && (
                <p className="error">
                    {errors.task.message}
                </p>
            )}
        </div>
    );
};

export default TodoForm;