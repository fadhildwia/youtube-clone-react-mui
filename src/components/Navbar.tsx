import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar: React.FC = () => {
  return (
    <Stack
      direction={'row'}
      alignContent={'center'}
      p={2}
      sx={{ position: 'sticky', backgroundColor: '#000', top: 0, justifyContent: 'space-between', zIndex: 100 }}
    >
      <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar