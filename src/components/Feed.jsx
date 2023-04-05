import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
            setVideos(data.items);
        });
    }, [selectedCategory]);
    useEffect(() => {
        document.title = 'My Movie • Nguyễn Minh Châu';
    }, []);
    return (
        <div className='feed_container'>
            <div className='feed_sidebar_container'>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
            <div className='feed_video_container'>
                <div className='feed_video_desc'>{selectedCategory}</div>
                {videos?.length > 0 ? (
                    <Videos videos={videos} />
                ) : (
                    <div className='feed_video_desc_loading'>Đang tải dữ liệu...</div>
                )}
            </div>
        </div>
    );
}

export default Feed;
