import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { ItemChannelInterface } from '../types';

interface ChannelCardProps {
  channelDetail: ItemChannelInterface[]
  marginTop: string
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channelDetail, marginTop }) => {
  const { id, snippet, statistics } = channelDetail[0]

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${id}`} style={{ textDecoration: 'none' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {snippet?.title}{' '}
            <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
          </Typography>
          {statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}
export default ChannelCard;