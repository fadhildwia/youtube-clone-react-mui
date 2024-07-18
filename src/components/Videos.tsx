import React from 'react'
import { ItemsInterface } from '../types'
import { Grid } from '@mui/material'
import Loader from './Loader'
import VideoCard from './VideoCard'

interface VideosProps {
  videos: Array<ItemsInterface>
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
  if(!videos?.length) return <Loader />;

  return (
    <Grid container spacing={2}>
      {videos.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
          {item.id.videoId && <VideoCard video={item} />}
        </Grid>
      ))}
    </Grid>
  )
}

export default Videos