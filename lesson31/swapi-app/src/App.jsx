import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerson, clearPerson } from "./redux/slices/swapiSlice";
import "./App.css";

const App = () => {
    const [id, setId] = useState("");

    const dispatch = useDispatch();

    const { person, isLoading } = useSelector(
        (state) => state.swapi
    );

    const handleClick = () => {
        if (!id) return;

        dispatch(getPerson(id));
        setId("");
    };

    const handleClear = () => {
        dispatch(clearPerson());
        setId("");
    };

    return (
        <div className="app">
            <h1>SWAPI</h1>

            <div className="controls">
                <input
                    className="input"
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter character ID"
                />

                <button
                    className="button"
                    onClick={handleClick}
                >
                    Get Info
                </button>
            </div>

            {isLoading && <p>Loading...</p>}

            {person && (
                <pre className="result">
          {JSON.stringify(person, null, 2)}
        </pre>
            )}

            <footer className="footer">
                <button
                    className="button-clear"
                    onClick={handleClear}
                >
                    Clear Data
                </button>
            </footer>
        </div>
    );
};

export default App;