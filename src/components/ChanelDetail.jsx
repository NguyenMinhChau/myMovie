import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function ChanelDetail() {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelDetail(data?.items[0]);
        });
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
            setVideos(data.items);
        });
    }, [id]);
    useEffect(() => {
        document.title = 'Channel Detail • Nguyễn Minh Châu';
    }, []);

    return (
        <div className='channelDetail_container'>
            <div
                className='channelDetail_poster'
                style={{
                    backgroundImage: 'linear-gradient(135deg, #a7fae3 0%, #0312b3 100%)',
                }}>
                <ChannelCard channelVideo={channelDetail} />
            </div>
            <div>
                {videos?.length > 0 ? (
                    <Videos videos={videos} />
                ) : (
                    <div className='channelDetail_loading'>Đang tải dữ liệu...</div>
                )}
            </div>
        </div>
    );
}

export default ChanelDetail;
