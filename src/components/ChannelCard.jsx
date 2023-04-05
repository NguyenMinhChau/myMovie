import React from 'react';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/contants';
import { Link } from 'react-router-dom';
function ChannelCard({ channelVideo }) {
    return (
        <div className='channelCard_container'>
            <Link to={`/channel/${channelVideo?.id?.channelId}`}>
                <div className='channelCard_container_info'>
                    <img
                        src={channelVideo?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelVideo?.snippet?.title}
                        className='channelCard_info_logo'
                    />
                    <div className='channelCard_info_name'>
                        {channelVideo?.snippet?.title}{' '}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </div>
                    {channelVideo?.statistics?.subscriberCount && (
                        <div className='channelCard_info_subscribe'>
                            {parseInt(channelVideo?.statistics?.subscriberCount).toLocaleString()}{' '}
                            subscribers
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default ChannelCard;
