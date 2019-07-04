import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../api/youtube'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    KEY = 'AIzaSyCmEHTJwTeSxexXbwy33cfgzQMKH7CvWUc';
    state = { videos: [], selectedVideo: null }

    onVideoClick = (video) => {
        this.setState({ selectedVideo: video })
    }

    componentDidMount() {
        this.onTermSubmit('Atul Patil guitar cover');
    }

    onTermSubmit = async (term) => {
        const resp = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: this.KEY
            }
        });
        this.setState({ videos: resp.data.items, selectedVideo: resp.data.items[0] })

    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo} /></div>
                        <div className="five wide column"><VideoList videos={this.state.videos} onVideoClick={this.onVideoClick} /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;