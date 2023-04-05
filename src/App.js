import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChanelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components';

function App() {
    return (
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChanelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    );
}

export default App;
