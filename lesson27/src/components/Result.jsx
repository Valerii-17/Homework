function Result({ winner, showResult }) {
    if (!showResult) {
        return null;
    }

    return (
        <div className="result">
            Winner is {winner.emoji}
        </div>
    );
}

export default Result;