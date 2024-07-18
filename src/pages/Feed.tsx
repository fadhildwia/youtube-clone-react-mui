import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Sidebar, Videos } from '../components'
import useGetSearch from '../hooks/useGetSearch';

const Feed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('New')

  const { data: dataSearch } = useGetSearch({
    params: {
      q: selectedCategory,
      maxResults: 50
    }
  });

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright © 2024 Fadhilah Dwi A
        </Typography>
      </Box>

      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{ color: 'white' }}>
          New {' '}
          <span style={{ color: '#f31503' }}>
            Videos
          </span>
        </Typography>
        
        <Videos videos={dataSearch?.items || []} />
      </Box>
    </Stack>
  )
}

export default Feed