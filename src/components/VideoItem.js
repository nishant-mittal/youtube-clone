import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div
      className="video-item ui card"
      onClick={() => props.onVideoItemClick(props.videos)}
    >
      <img
        src={props.videos.snippet.thumbnails.medium.url}
        alt={props.videos.snippet.description}
      />

      <div className="content">
        <p className="header">{props.videos.snippet.title}</p>
        <div className="meta">{props.videos.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
