import React from 'react'
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ItemsInterface } from '../types';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface VideoCardProps {
  video: ItemsInterface
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { id, snippet } = video || {}
  
  return (
    <Card style={{ backgroundColor: '#000' }}>
      <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl} style={{ textDecoration: 'none' }}>
        <CardMedia
          image={snippet.thumbnails.high.url || demoThumbnailUrl}
          sx={{ width: '100%', height: 180 }} 
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl } style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
};

export default VideoCard