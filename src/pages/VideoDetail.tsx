import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useGetVideoDetail from '../hooks/useGetVideoDetail'
import Loader from '../components/Loader'

const VideoDetail: React.FC = () => {
  const { id } = useParams();

  const { data: dataVideoDetail, isLoading: loadingVideoDetail } = useGetVideoDetail({
    id: id as string,
    options: {
      enabled: !!id
    }
  });

  if(loadingVideoDetail) return <Loader />;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} width={'80%'}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {dataVideoDetail?.items[0].snippet.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${dataVideoDetail?.items[0].snippet.channelId}`} style={{ textDecoration: 'none' }}>
                <Typography variant={'h6'}  color="#fff" >
                  {dataVideoDetail?.items[0].snippet.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(dataVideoDetail?.items[0].statistics.viewCount || '').toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(dataVideoDetail?.items[0].statistics.likeCount || '').toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail