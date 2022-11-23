import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import VideoItem   from './VideoItem';

const VideoList = ({videos, onVideoSelect}) =>  {
    const listOfVideos = videos.map(
        (video, id) => <VideoItem video={video} key={id} onVideoSelect={onVideoSelect} />
    )
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList; 
// function base for dummy component
// dummy component has not state