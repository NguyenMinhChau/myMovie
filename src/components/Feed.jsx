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
                <Videos videos={videos} />
            </div>
        </div>
    );
}

export default Feed;
