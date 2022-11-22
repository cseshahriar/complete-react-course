import React from "react";
import Grid from '@mui/material/Grid';

import {SearchBar, VideoDetail, VideoList}  from './components';
import youtube from './api/youtube'; // export default youtube

class App extends React.Component {
    render() {
        return(
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                <Grid container spacing={16}>
                    
                    {/* Search bar */}
                    <Grid item xs={12}>
                        <SearchBar/>
                    </Grid>

                    {/* Video Detail */}
                    <Grid item xs={8}>
                        <VideoDetail/>
                    </Grid>

                    {/* Video list */}
                    <Grid item xs={4}>
                        <VideoList/>
                    </Grid>
                    
                </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;