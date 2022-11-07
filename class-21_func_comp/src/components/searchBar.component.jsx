const SearchBar = (props) => {
    return(
        <div className="col-12">
            <form className="form-inline">
                <label className="sr-only">Search</label>
                <input 
                    type="text"
                    name="q"
                    className="form-control mb-2 mr-sm-2"
                    placeholder="Search by Name"
                    value={props.q}
                    onChange={props.onChange}
                />
            </form>
        </div>
    )
};

export default SearchBar;