import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader: React.FC = () =>  (
  <Box minHeight="95vh" width={'100%'}>
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;