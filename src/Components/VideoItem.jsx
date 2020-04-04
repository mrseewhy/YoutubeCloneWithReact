import React from "react";
// import { Grid, Paper, Typography } from "@material-ui/core";


const VideoItem = ({ video, onVideoSelect }) => {
  return (
<div className="col s12">
  <div className="card" >
      <div className="card-image waves-effect waves-block waves-light" onClick={() => onVideoSelect(video)}>
        <img className="activator" alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4"><strong>{video.snippet.title}</strong><i className="material-icons right">more_vert</i></span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{video.snippet.title}<i className="material-icons right">close</i></span>
        <p>{video.snippet.description}</p>
      </div>
  </div>
</div>
  );
}

export default VideoItem;
