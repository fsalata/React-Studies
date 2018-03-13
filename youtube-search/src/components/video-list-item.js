import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    return (
        <li className="media list-item" onClick={ () => onVideoSelect(video) }>
            <img className="mr-3" src={ video.snippet.thumbnails.default.url } alt=""/>
            <div className="media-body">
                <p className="media-heading">
                    { video.snippet.title }
                </p>
            </div>
        </li>
    );
}

export default VideoListItem;