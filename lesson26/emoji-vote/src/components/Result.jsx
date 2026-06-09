function Result(props) {
    if (!props.showResult) {
        return null;
    }

    return (
        <div className="result">
            Winner is {props.winner.emoji}
        </div>
    );
}

export default Result;