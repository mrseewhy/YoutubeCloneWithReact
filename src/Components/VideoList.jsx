import React from "react";
// import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return (
    <div className="col s6">
      <div className="row">
        {listOfVideos}
      </div>
     </div>
  );
}

export default VideoList;
