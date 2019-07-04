import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {
    render() {
        const renderlist = this.props.videos.map(video => {
            return <VideoItem video={video} key={video.id.videoId} onVideoClick={this.props.onVideoClick}/>
        })
        return (
            <div className="video-list ui relaxed divided list">
                {renderlist}
            </div>
        )
    }
}

export default VideoList