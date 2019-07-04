import './VideoItem.css'
import React from 'react'

class VideoItem extends React.Component {
    
    render() {

        return (
            <div className="video-item item" onClick={() => this.props.onVideoClick(this.props.video)}>
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.description} />
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
                
            </div>
        )
    }
}

export default VideoItem;