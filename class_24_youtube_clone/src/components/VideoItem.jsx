import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const VideoItem = ({video}) => {
    if(!video) return <div>loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignments: 'center'}}>
                <img style={{marginRight: '20px'}}
                    alt="thumbnail" 
                    src={video.snippet.thumbnails.medium.url}
                    height={video.snippet.thumbnails.medium.height}    
                    width={video.snippet.thumbnails.medium.width}    
                />
                <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;