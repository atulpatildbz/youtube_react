import React from 'react'

class SearchBar extends React.Component {
    state = {term: ''};
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }
    onChange = (e) => {
        this.setState({term: e.target.value})
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <input type="text" placeholder="Search" onChange={this.onChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;