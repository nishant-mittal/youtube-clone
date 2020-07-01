import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import Loader from "./Loader";

class App extends Component {
  state = {
    videos: [],
    videoClicked: null,
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: "AIzaSyCo0CYbJSb1T7gDWAdUBQsK0CvAlEziwzw",
      },
    });

    this.setState({
      videos: response.data.items,
      videoClicked: response.data.items[0],
    });
  };

  onVideoItemClick = (video) => {
    console.log(video);
    this.setState({ videoClicked: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoPlayer videoClicked={this.state.videoClicked} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={this.state.videos}
              onVideoItemClick={this.onVideoItemClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
