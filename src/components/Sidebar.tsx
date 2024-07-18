import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

interface SidebarProps {
  selectedCategory: string
  setSelectedCategory: (item: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
    direction={'row'}
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' }
    }}
    >
      {categories.map((item, index) => (
        <button
          key={index}
          className='category-btn'
          onClick={() => setSelectedCategory(item.name)}
          style={{
            background: item.name === selectedCategory ? '#fc1503' : '#000',
            color: 'white'
          }}
        >
          <span style={{ color: item.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{item.icon}</span>
          <span style={{ opacity: item.name === selectedCategory ? '1' : '0.8' }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar