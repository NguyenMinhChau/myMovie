import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };
    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: '12px',
                pl: 2,
                boxShadow: 'none',
            }}>
            <input
                className='searchbar_input'
                placeholder='Tìm kiếm'
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'var(--primary-color)' }}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
