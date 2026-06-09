import {Component} from "react";
import EmojiList from "./components/EmojiList";
import Result from "./components/Result";
import "./App.css";

const Emojis = [
    {emoji: "😀", votes: 0},
    {emoji: "😊", votes: 0},
    {emoji: "😎", votes: 0},
    {emoji: "🤩", votes: 0},
    {emoji: "😍", votes: 0},
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emojis: Emojis,
            showResult: false,
        };
    }

    componentDidMount() {
        const emojis = localStorage.getItem("emojis");

        if (emojis) {
            this.setState({
                emojis: JSON.parse(emojis),
            });
        }
    }

    handleVote(index) {
        const updatedEmojis = this.state.emojis.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    votes: item.votes + 1,
                };
            }

            return item;
        });

        this.setState({
            emojis: updatedEmojis,
        });

        localStorage.setItem(
            "emojis",
            JSON.stringify(updatedEmojis)
        );
    }

    clearResults() {
        localStorage.removeItem("emojis");

        this.setState({
            emojis: Emojis,
            showResult: false,
        });
    }

    render() {
        const {emojis, showResult} = this.state;

        const winner = emojis.reduce((max, item) => {
            return item.votes > max.votes ? item : max;
        });

        return (
            <div className="container">
                <h1 className="title">Emoji Vote</h1>

                <EmojiList
                    emojis={emojis}
                    handleVote={(index) => this.handleVote(index)}
                />

                <button
                    onClick={() =>
                        this.setState({
                            showResult: true,
                        })
                    }
                >
                    Show Result
                </button>

                <button onClick={() => this.clearResults()}>
                    Clear Results
                </button>

                <Result
                    winner={winner}
                    showResult={showResult}
                />
            </div>
        );
    }
}

export default App;