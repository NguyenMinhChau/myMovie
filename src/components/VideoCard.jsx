import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/contants';

function VideoCard({
    video: {
        id: { videoId },
        snippet,
    },
}) {
    return (
        <div className='videoCard_container'>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ flexShrink: 0 }}>
                <img
                    src={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    className='videoCard_image'
                />
            </Link>
            <div className='videoCard_info_video'>
                <Link
                    to={videoId ? `/video/${videoId}` : demoVideoUrl}
                    title={snippet?.title}
                    style={{ flex: 1 }}>
                    <div className='videoCard_info_video_title'>
                        {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </div>
                </Link>
                <Link
                    to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
                    title={snippet?.title}>
                    <div className='videoCard_info_video_sub'>
                        {snippet?.channelTitle?.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default VideoCard;
