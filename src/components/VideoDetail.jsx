import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function VideoDetail() {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideoDetail(data.items[0]);
        });
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => {
            setVideos(data.items);
        });
    }, [id]);
    useEffect(() => {
        document.title = 'Video Detail • Nguyễn Minh Châu';
    }, []);
    if (!videoDetail?.snippet) return <div className='videoDetail_loading'>Đang tải...</div>;
    const {
        snippet: { title, channelId, channelTitle, description },
        statistics: { viewCount, likeCount, favoriteCount },
    } = videoDetail;
    return (
        <div className='videoDetail_container'>
            {videoDetail?.snippet ? (
                <div className='videoDetail_preview_container'>
                    <div className='videoDetail_preview_react_player'>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className='react-player'
                            controls
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='videoDetail_preview_name'>{title}</div>
                    <div className='videoDetail_preview_channel_count_container'>
                        <Link to={`/channel/${channelId}`}>
                            <div className='videoDetail_preview_channel_text'>
                                {channelTitle}{' '}
                                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                            </div>
                        </Link>
                        <div className='videoDetail_preview_count_actions'>
                            <div className='mr8'>{parseInt(viewCount).toLocaleString()} views</div>
                            <div>{parseInt(likeCount || favoriteCount).toLocaleString()} likes</div>
                        </div>
                    </div>
                    {description && (
                        <div className='videoDetail_preview_description'>{description}</div>
                    )}
                </div>
            ) : (
                <div className='videoDetail_loading'>Đang tải...</div>
            )}
            <div className='videoDetail_videos_container'>
                {videos?.length > 0 ? (
                    <Videos videos={videos} cols={1} />
                ) : (
                    <div className='videoDetail_videos_loading'>Đang tải dữ liệu...</div>
                )}
            </div>
        </div>
    );
}

export default VideoDetail;
