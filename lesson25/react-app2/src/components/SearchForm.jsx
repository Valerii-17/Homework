const SearchForm = () => {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                value="https://www.swapi.tech/api/"
            />

            <input
                type="text"
                className="form-control"
                value="people/1/"
            />

            <button className="btn btn-outline-secondary">
                Get info
            </button>
        </div>
    );
};

export default SearchForm;