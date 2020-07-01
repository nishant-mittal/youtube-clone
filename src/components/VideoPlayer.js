import React from "react";

const VideoPlayer = (props) => {
  //   const url = `https://www.youtube.com/watch?v=${props.videoClicked.id}`;
  //   console.log("url", url);

  console.log("VideoPlayer", props.videoClicked);

  if (!props.videoClicked) {
    return <div></div>;
  }
  const url = `https://www.youtube.com/embed/${props.videoClicked.id.videoId}`;

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe src={url} title={props.videoClicked.snippet.title} />
      </div>
      <h4>{props.videoClicked.snippet.title}</h4>
      <p>{props.videoClicked.snippet.description}</p>
    </div>
  );
};

export default VideoPlayer;
