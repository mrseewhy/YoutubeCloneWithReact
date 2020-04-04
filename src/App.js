import React, { Component } from 'react';
import {Grid} from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./Components/SearchBar"
import VideoDetail from './Components/VideoDetail'
import VideoList from './Components/VideoList'
class App extends Component {

  state={
    videos: [],
    selectedVideo: "",
  }

  handleFormSubmit = async (searchTerm) => {
    const response = await youtube.get('search',{
    params: {
        part: "snippet",
        maxResults: 5,
        key:"AIzaSyDUftQ6qc-q3GUncslFTYCEm2V1r0MB1rA",
        q: searchTerm
    
    }
  });
  this.setState({videos: response.data.items, 
    selectedVideo: response.data.items[0], 
  })
}

onVideoSelect = (video)=>{
  this.setState({
    selectedVideo: video
  })
}
  render() {
    const{selectedVideo, videos} = this.state;
    return ( 
      <div className="container">
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit = {this.handleFormSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
                <VideoList  videos = {videos} onVideoSelect={this.onVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        </div>
    );
  }
}

export default App;
