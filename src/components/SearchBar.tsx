import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>('');

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component={'form'}
      onSubmit={onHandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input
        type="text"
        style={{
          border: 'none',
          outline: 'none',
          width: 350
        }}
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type='submit'
        sx={{
          p: '10px',
          color: 'red'
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar