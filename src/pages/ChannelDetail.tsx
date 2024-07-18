import React from 'react'
import { useParams } from 'react-router-dom';
import useGetChannel from '../hooks/useGetChannel';
import { Box } from '@mui/material';
import { Videos } from '../components';
import ChannelCard from '../components/ChannelCard';
import useGetChannels from '../hooks/useGetChannels';

const ChannelDetail: React.FC = () => {
  const { id } = useParams();

  const { data: dataChannel } = useGetChannel({
    id: id as string,
    options: {
      enabled: !!id
    }
  });

  const { data: dataChannels } = useGetChannels({
    params: {
      channelId: id as string,
      maxResults: 50,
    },
    options: {
      enabled: !!id
    }
  });

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        {dataChannel?.items && <ChannelCard channelDetail={dataChannel?.items || []} marginTop="-93px" />}
      </Box>
      <Box p={2} display="flex" sx={{ mx: { sm: '100px' } }}>
        <Videos videos={dataChannels?.items || []} />
      </Box>
    </Box>
  )
}

export default ChannelDetail