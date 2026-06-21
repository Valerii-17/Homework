import "./App.css";
import { useSelector, useDispatch } from "react-redux";


import {
    increment,
    decrement,
} from "./slices/counterSlice";

const App = () => {
    const count = useSelector(
        (state) => state.counter.value
    );

    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Value: {count}</h1>

            <div className="buttons">
                <button
                    onClick={() =>
                        dispatch(increment())
                    }
                >
                    +
                </button>

                <button
                    onClick={() =>
                        dispatch(decrement())
                    }
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default App;