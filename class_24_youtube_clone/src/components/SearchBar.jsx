import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

class SearchBar extends React.Component {
    state = {
        searchTern: ''
    }
 
    // handle search term
    handleSearch = (event) => this.setState({searchTern: event.target.value});
    
    // handle search
    handleSubmit = (event) => {
        const  {searchTern } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTern); // app component func call
        event.preventDefault();
    }

    render() {
        return(
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search ..." onChange={this.handleSearch} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar