import React from "react";

const VideoDetail = ({ video, columnSize = "col-md-8" }) => {
    if(!video) {
        return  <div className="video-detail col-md-8">Loading...</div>
    }

    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
    const videoClass = `video-detail ${columnSize}`;

    return (
        <div className={videoClass}>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={ videoURL}  title={ video.snippet.title }></iframe>
            </div>
            <div className="details">
                <h5>
                    { video.snippet.title }
                </h5>
                <p>
                    { video.snippet.description }
                </p>
            </div>
        </div>
    );
}

export default VideoDetail;