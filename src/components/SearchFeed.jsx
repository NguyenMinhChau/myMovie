import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function SearchFeed() {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
            setVideos(data.items);
        });
    }, [searchTerm]);
    useEffect(() => {
        document.title = 'Search result • Nguyễn Minh Châu';
    }, []);
    return (
        <div className='searchFeed_container'>
            <div className='searchFeed_result_text'>
                Kết quả cho tìm kiếm{' '}
                <span style={{ color: 'var(--primary-color)' }}>{searchTerm}</span>
            </div>
            {videos?.length > 0 ? (
                <Videos videos={videos} />
            ) : (
                <div className='searchFeed_loading'>Đang tải dữ liệu...</div>
            )}
        </div>
    );
}

export default SearchFeed;
