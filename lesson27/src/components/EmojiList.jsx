function EmojiList({ emojis, handleVote }) {
    return (
        <div className="emoji-list">
            {emojis.map((item, index) => (
                <div
                    className="emoji-card"
                    key={index}
                    onClick={() => handleVote(index)}
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