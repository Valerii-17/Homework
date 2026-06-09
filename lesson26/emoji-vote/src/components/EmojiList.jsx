function EmojiList(props) {
    return (
        <div className="emoji-list">
            {props.emojis.map((item, index) => (
                <div
                    className="emoji-card"
                    key={index}
                    onClick={() => props.handleVote(index)}
                >
                    <div className="emoji">
                        {item.emoji}
                    </div>

                    <div className="votes">
                        {item.votes}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EmojiList;