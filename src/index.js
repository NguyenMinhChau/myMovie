import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';
import './styles/navbar.css';
import './styles/searchbar.css';
import './styles/sidebar.css';
import './styles/feed.css';
import './styles/videos.css';
import './styles/videoCard.css';
import './styles/videoDetail.css';
import './styles/channelDetail.css';
import './styles/channelCard.css';
import './styles/searchFeed.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
