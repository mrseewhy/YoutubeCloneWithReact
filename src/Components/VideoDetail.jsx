import React from "react";
// import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <React.Fragment>
      <div class="col s8">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                          <iframe
                            frameBorder="0"
                            height="360px"
                            width="620px"
                            title="Video Player"
                            src={videoSrc}
                          />
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">{video.snippet.title} - {video.snippet.channelTitle}<i class="material-icons right">more_vert</i></span>
                      
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">{video.snippet.title}<i class="material-icons right">close</i></span>
                      <p>{video.snippet.description}</p>
                    </div>
                </div>
      </div>
    </React.Fragment>
    );
}

export default VideoDetail;
