import {useState, useEffect} from "react";
import "./App.css";
import EmojiList from "./components/EmojiList";
import Result from "./components/Result";


const EMOJIS = [
    {emoji: "😀", votes: 0},
    {emoji: "😊", votes: 0},
    {emoji: "😎", votes: 0},
    {emoji: "🤩", votes: 0},
    {emoji: "😍", votes: 0},
];

function App() {
    const [emojis, setEmojis] = useState(EMOJIS);


    useEffect(() => {
        const updatedEmojis = localStorage.getItem("emojis");

        if (updatedEmojis) {
            setEmojis(JSON.parse(updatedEmojis));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem(
            "emojis", JSON.stringify(emojis)
        );
    }, [emojis]);
    const [showResult, setShowResult] = useState(false);

    function handleVote(index) {
        const updatedEmojis = emojis.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    votes: item.votes + 1,
                };
            }

            return item;
        });

        setEmojis(updatedEmojis);
    }

    function clearResults() {
        setEmojis(EMOJIS);
        setShowResult(false);
    }

    const winner = emojis.reduce((max, item) => {
        return item.votes > max.votes ? item : max;
    });


    return (
        <div className="container">
            <h1 className="title">Emoji Vote</h1>

            <EmojiList
                emojis={emojis}
                handleVote={handleVote}
            />

            <button onClick={() => setShowResult(true)}>
                Show Result
            </button>
            <button onClick={clearResults}>
                Clear Results
            </button>

            <Result
                winner={winner}
                showResult={showResult}
            />

        </div>

    );
}

export default App;