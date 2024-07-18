import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Sidebar, Videos } from '../components'
import useGetSearch from '../hooks/useGetSearch';

const Feed: React.FC = () => {
  const { data: dataSearch, isLoading: loadingSearch } = useGetSearch({
    params: {
      q: 'ariel',
      maxResults: 50
    }
  });

  console.log('dataSearch', dataSearch, loadingSearch)

  return (
    <Stack sx={{  flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright © 2024 Fadhilah Dwi A
        </Typography>
      </Box>

      <Box p={2} sx={{ overflow: 'auto', height: '9vh', flex: 2 }}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{ color: 'white' }}>
          New {' '}
          <span style={{ color: '#f31503' }}>
            Videos
          </span>
        </Typography>
      </Box>

      <Videos videos={[]} />
    </Stack>
  )
}

export default Feed