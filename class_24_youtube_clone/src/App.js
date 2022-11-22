import React from "react";
import Grid from '@mui/material/Grid';

import {SearchBar, VideoDetail, VideoList}  from './components';
import youtube from './api/youtube'; // export default youtube

class App extends React.Component {

    state = {
        videos: [],
        video: null
    }

    handleSubmit = async(searchTerm) => {
        const response = await youtube.get(
            'search', 
            {
                params:{
                    q: searchTerm,
                    part: 'snippet',
                    maxResults: 5,
                    key:'AIzaSyCpqFb4UmogECg8b8xR0OMY8SRf_L3LgFI'
                } 
            }
        );
        console.log(response.data.items);
        this.setState(
            {
                videos: response.data.items,
                video: response.data.items[0]
            }
        );
    }

    render() {
        
        const {video, videos} = this.state;

        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                <Grid container spacing={10}>
                    
                    {/* Search bar */}
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                    </Grid>

                    {/* Video Detail */}
                    <Grid item xs={8}>
                        <VideoDetail video={video} />
                    </Grid>

                    {/* Video list */}
                    <Grid item xs={4}>
                        <VideoList videos={videos}/>
                    </Grid>
                    
                </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;