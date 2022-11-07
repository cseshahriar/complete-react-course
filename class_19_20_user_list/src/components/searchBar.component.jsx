import React from 'react';

class SearchBar extends React.Component {
    render() {
        // props
        const {onChange, q} = this.props;
        console.log('search component', this.props)

        return (
            <div className="col-12">
                <form className="form-inline">
                    <label className="sr-only">Search</label>
                    <input 
                    type="text"
                    name="q"
                    className="form-control mb-2 mr-sm-2"
                    placeholder="Search by Name"
                    value={q}
                    onChange={onChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;