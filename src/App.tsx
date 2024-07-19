import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from './pages'
import { Navbar } from './components'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta name="description" content="This is a Youtube Clone built with React and Vite" />
        <title>Youtube Clone</title>
      </Helmet>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
