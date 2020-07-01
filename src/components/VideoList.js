import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderVideos = props.videos.map((video) => {
    return (
      <VideoItem
        videos={video}
        onVideoItemClick={props.onVideoItemClick}
        key={video.id.videoId}
      />
    );
  });

  return <div>{renderVideos}</div>;
};

export default VideoList;
