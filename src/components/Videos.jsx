import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

function Videos({ videos, cols }) {
    return (
        <div className={`videos_container`} style={{ '--cols': cols }}>
            {videos?.map((video, index) => {
                return (
                    <div className='video_item' key={index}>
                        {video.id.videoId && <VideoCard video={video} />}
                        {video.id.channelId && <ChannelCard channelVideo={video} />}
                    </div>
                );
            })}
        </div>
    );
}

export default Videos;
